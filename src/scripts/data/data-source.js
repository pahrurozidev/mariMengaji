class DataSource {

    static async getAllSurah() {
        try {
            const response = await fetch("https://api-alquranid.herokuapp.com/surah")
            const responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async getDetailSurah(nomorSurah) {
        try {
            const response = await fetch(`https://api-alquranid.herokuapp.com/surah/${nomorSurah}`)
            const responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.log(error);
        }
    }

    static async searchSurah(surahName) {
        try {
            const response = await fetch(`https://api-alquranid.herokuapp.com/surah/search/${surahName}`)
            const responseJson = await response.json();
            return responseJson.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export { DataSource }