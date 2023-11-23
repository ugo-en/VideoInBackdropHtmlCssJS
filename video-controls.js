const backdrop = document.getElementsByClassName("backdrop")[0]
const inner = document.getElementsByClassName("info")[0].getElementsByClassName("inner")[0]
const video = backdrop.getElementsByTagName("video")[0]

inner.onclick = () => {
    video.play()
}