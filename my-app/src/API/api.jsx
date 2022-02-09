export async function GetInfo() {

    try {
        const info = await fetch('https://api.coincap.io/v2/assets');
        const json = await info.json();
        return json.data;
    }   
    catch(err) {
        return;
    }
}