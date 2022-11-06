

export default async function fetchResolutions() {
    const response = await fetch('/resolutions');
    const data = await response.json();
    return data;
}