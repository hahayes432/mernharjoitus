
export async function hae() {
    const jokujuttu = await fetch("/", {mode:"cors"});
    if(!jokujuttu.ok) {
        console.error("vituiks meni");
    }
    return jokujuttu.json();
}