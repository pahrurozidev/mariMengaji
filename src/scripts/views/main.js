import "../components/nav-bar.js";
import { DataSource } from "../data/data-source";

const main = async () => {

    const surahListElement = document.querySelector(".surah-lists");

    const navBarElement = document.querySelector("nav-bar");
    const searchSurah = async () => {
        surahListElement.innerHTML = "";
        const response = await DataSource.searchSurah(navBarElement.value)
        renderAllSurah(response);

        const sectionElement = surahListElement.querySelector("section");
        sectionElement.addEventListener("click", async () => {
            const nomorSurah = sectionElement.querySelector("h4").innerText;
            const response = await DataSource.getDetailSurah(nomorSurah);
            const responseByName = await DataSource.getAllSurah();
            renderDetailSurah(response, responseByName, nomorSurah);
        })
    }

    navBarElement.clickEvent = searchSurah;

    const response = await DataSource.getAllSurah();
    renderAllSurah(response);

    function renderAllSurah(dataSurah) {
        navBarElement.style.position = "fixed";
        navBarElement.style.width = "100%";
        navBarElement.style.top = "0";
        navBarElement.style.zIndex = "999";

        dataSurah.forEach(surah => {
            surahListElement.innerHTML += `
            <section id="allSurah">
                <aside class="info-surah">
                    <h4 class="nomor">${surah.nomor}</h4>
                    <div class="describe">
                        <h5>${surah.nama}</h5>
                        <p>${surah.type} | ${surah.ayat} Ayat</p>
                    </div>
                </aside>
                <aside class="asma">${surah.asma}</aside>
            </section>
        `;
        })
    }

    const sectionELement = surahListElement.querySelectorAll("section");
    for (let i = 0; i < sectionELement.length; i++) {
        const element = sectionELement[i];
        element.addEventListener("click", async () => {
            const nomorSurah = element.querySelector("h4").innerText;
            const response = await DataSource.getDetailSurah(nomorSurah);
            const responseByName = await DataSource.getAllSurah();
            renderDetailSurah(response, responseByName, nomorSurah);
        })
    }

    function renderDetailSurah(dataSurah, responseByName, nomorSurah) {
        surahListElement.innerHTML = "";

        surahListElement.style.marginTop = "8em";
        surahListElement.style.zIndex = "-99";

        navBarElement.style.visibility = "hidden";

        const jumbotronElement = document.createElement("aside");

        const surahByNumber = responseByName.filter(surah => {
            return surah.nomor == nomorSurah;
        })

        surahByNumber.forEach(surah => {
            jumbotronElement.innerHTML =
                `
            <div class="jumbotron">
                <div class="sub-jumbotron">
                    <div class="button-back">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg> 
                        <p>Back</p>
                    </div>
                    <div class="surah">
                        <p>${surah.nama}</p>
                    </div>
                    <div class="desc">
                        <aside>
                            <p>${surah.type}</p>
                            <p>${surah.arti}</p>
                            <p>${surah.ayat} Ayat</p>
                        </aside>
                    </div>
                </div>
            </div>

            <div class="audio">
                <audio controls>
                    <source src="${surah.audio}" type="audio/mpeg">
                </audio>
            </div>
        `;
        })

        surahListElement.append(jumbotronElement)

        dataSurah.forEach(surah => {
            const convertoLatih = persianJs(`${surah.nomor}`).englishNumber().toString(); //returns: ۳۴۵

            surahListElement.innerHTML +=
                `
                    <section class="surah-item">
                        <aside class="desc-asma">
                            <h5 class="nomor">${convertoLatih}</h5>
                            <h4 class="ar">${surah.ar}</h4>
                        </aside>
                        <aside class="translate">
                            <p class="asma">${surah.tr}</p>
                            <p>${surah.id}</p>
                        </aside>
                    </section>
                `
        })

        const btnBackElement = document.querySelector(".button-back");
        btnBackElement.addEventListener("click", async () => {
            surahListElement.innerHTML = "";
            jumbotronElement.visibility = "hidden";
            surahListElement.style.marginTop = "4em";
            navBarElement.style.visibility = "visible"
            const response = await DataSource.getAllSurah();
            renderAllSurah(response);
        })
    }
}

export { main };