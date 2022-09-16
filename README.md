# Static Landing Page

This is just a simple landing page created as a sample

## JavaScript

I used Notification Request API for extra user interaction
you can even create your own

### Key points and features

I am using a button in order to request for Notifications

I use visibilitychange on document to detect if the user is still on the page

I use Math.random method to calculate for how long user is away (time in seconds)

I use clear interval and notfication.close method to remove notifications

```js
// Allow Push Notifications on Browser
const button = document.getElementById("getBtn")

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notif = new Notification(
        "How To Send Push Notifications With JavaScript",
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
```

## Design

I used simple and minimlistic design and colors

Color codes used are `#ab55c8` & `#2d219f`

Gradients are `linear-gradient( to left, rgba(171, 85, 200, 0.9), rgba(45, 33, 159, 0.8) )`

## Clone

Commands to clone this project and use your own

`git clone https://github.com/tech-shamp/landing-page`

# Social Networks

Reach us out on

```
mail: iboy@duck.com
mail: shampytechnical@gmail.com
mail: mqiboy.love@gmail.com

instagram: https://instagram.com/tech_shamp
WhatsApp: https://wa.me/923010116321
GitHub: https://github.com/tech-shamp
```
