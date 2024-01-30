
export async function hae() {
    const jokujuttu = await fetch("/", {method:"GET", mode:"cors"});
    if(!jokujuttu.ok) {
        console.error("vituiks meni");
    }
    return jokujuttu.json();
}