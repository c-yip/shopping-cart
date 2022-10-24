import GitHub from "../images/GitHub-Mark-Light-120px-plus.png";

export default function Footer(props) {
  return (
    <footer>
      <p>Created by Christian Yip</p>
      <a href="https://github.com/c-yip/shopping-cart">
        <img src={GitHub} alt="GitHub icon" />
      </a>
    </footer>
  );
}
