export default async function downloadFile(
    brandId,
    indicationId,
    type,
    path,
    filename
) {
    window.open(
        `${process.env.REACT_APP_API_URL}shared/downloadFile` +
        `?brandId=${brandId}` +
        `&indicationId=${indicationId}` +
        `&type=${type}` +
        `&path=${path}` +
        `&filename=${filename}`
    );
}