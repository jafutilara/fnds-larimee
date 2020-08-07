const path = require("path");

export const dir: string = `../app/assets/`;

export async function root<T> (req: any, reply: any) {
    reply.status(200)
         .render("index");
}

export async function checkout<T> (req: any, reply: any) {
    reply.status(200)
         .render("checkout");
}

export async function siteLogo<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}logo.png`));
}

export async function siteBackground<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}background.jpg`))
}
export async function siteName<T> (root: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}name.png`))
}
export async function siteNameTwo<T> (root: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}name3.png`))
}
export async function font<T>(root: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}MuseoSans.otf`));
}
export async function mainCss<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}stylesheets/main.css`))
}
export async function mainJs<T> (req: any, reply: any) {
    async function sendScript<T> () {
        reply.sendFile(path.resolve(`${dir}scripts/main.js`));
    }
    setTimeout(sendScript, 2000);
}

export async function first<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}media/first.jpg`));
}
export async function second<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}media/second.jpg`));
}
export async function icon<T> (req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}favicon.ico`));
}

export async function sl1(req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}Slider1.jpeg`));
}
export async function sl2(req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}Slider2.jpeg`));
}
export async function sl3(req: any, reply: any) {
    reply.sendFile(path.resolve(`${dir}Slider3.jpeg`));
}