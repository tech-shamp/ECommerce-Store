console.info("Hello World")

// Allow Push Notifications on Browser
const button = document.getElementById("getBtn")
button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notif = new Notification(
        "How To Send Push Notifications With JavaScript",
        {
          body: "Sending push notifications in JavaScript seems like it would be difficult if not impossible.",
          icon: "img/bubble.png",
          vibrate: true,
        },
      )
      notif.addEventListener("error", (e) => {
        alert(e)
      })
    } else console.error(`Permission ${perm}`)
  })
})

let notification
let interval
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    Notification.requestPermission()
    const leaveDate = new Date()
    interval = setInterval(() => {
      notification = new Notification("Please Come Back", {
        body: `You have been gone for ${Math.round(
          (new Date() - leaveDate) / 1000,
        )} seconds`,
        icon: "img/bubble.png",
        tag: "Leave Interval",
        vibrate: true,
      })
    })
  } else {
    if (interval) clearInterval(interval)
    if (notification) notification.close()
  }
})
