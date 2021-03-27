export const logo = process.env.PUBLIC_URL + "/images/logo.png";
export const logo_dark = process.env.PUBLIC_URL + "/images/logo_dark.png";
export const authpage_video = process.env.PUBLIC_URL + "/videos/bg_video.mp4";
export const disco_video = process.env.PUBLIC_URL + "/videos/bg_video_disco.mp4";
export const randomBackground = () => {
    let min = 1;
    let max = 3;
    const bg_index = Math.round(Math.random() * (max - min) + min);
    return process.env.PUBLIC_URL + `/videos/bg_video_${bg_index}.mp4`;
}
