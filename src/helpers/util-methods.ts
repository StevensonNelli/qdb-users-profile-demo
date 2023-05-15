import One from "../assets/images/user-pics/1.jpg";
import Two from "../assets/images/user-pics/2.jpg";
import Three from "../assets/images/user-pics/3.jpg";
import Four from "../assets/images/user-pics/4.jpg";
import Five from "../assets/images/user-pics/5.jpg";
import Six from "../assets/images/user-pics/6.jpg";
import Seven from "../assets/images/user-pics/7.jpg";
import Eight from "../assets/images/user-pics/8.jpg";
import Nine from "../assets/images/user-pics/9.jpg";
import Ten from "../assets/images/user-pics/10.jpg";
import BlogOne from "../assets/images/blog-pics/1.jpg";
import BlogTwo from "../assets/images/blog-pics/2.jpg";
import BlogThree from "../assets/images/blog-pics/3.jpg";
import BlogFour from "../assets/images/blog-pics/4.jpg";
import BlogFive from "../assets/images/blog-pics/5.jpg";
import BlogSix from "../assets/images/blog-pics/6.jpg";
import BlogSeven from "../assets/images/blog-pics/7.jpg";
import BlogEight from "../assets/images/blog-pics/8.jpg";
import BlogNine from "../assets/images/blog-pics/9.jpg";
import BlogTen from "../assets/images/blog-pics/10.jpg";

export function getRandomNum() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const random = Math.floor(Math.random() * numbers.length);
  return numbers[random];
}

export function userPics(id: number) {
  const pics = {
    "1a": One,
    "2a": Two,
    "3a": Three,
    "4a": Four,
    "5a": Five,
    "6a": Six,
    "7a": Seven,
    "8a": Eight,
    "9a": Nine,
    "10a": Ten,
  };
  const key = `${id}a` as keyof typeof pics;
  return pics[key];
}

export function blogPics(id: number) {
  const pics = {
    "1a": BlogOne,
    "2a": BlogTwo,
    "3a": BlogThree,
    "4a": BlogFour,
    "5a": BlogFive,
    "6a": BlogSix,
    "7a": BlogSeven,
    "8a": BlogEight,
    "9a": BlogNine,
    "10a": BlogTen,
  };
  const key = `${id}a` as keyof typeof pics;
  return pics[key];
}
