export default async function readFileSync(file) {
    const content = await new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsText(file);
    });

    return content;
}