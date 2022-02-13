export async function getInfo(url) {
    try {
        const info = await fetch(`https://api.coincap.io/v2/${url}`);
        const json = await info.json();
        return json.data;
    }   
    catch(err) {
        return err;
    }
}