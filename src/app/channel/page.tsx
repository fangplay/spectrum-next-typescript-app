import Image from "next/image";
import channellogo from "./images/logo-x8.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook , faYoutube , faTwitch } from "@fortawesome/free-solid-svg-icons";
import styles from "../components/IconRow.module.css";

export default function Channel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <Image src={channellogo} alt="channel logo" width={1000} height={850} />
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
              <p>
                NeoXFANGPLAY is started in 2018. This channel presentation on
                gamers , games , podcast , event time and other stories for
                mostly people who want know that.
              </p>
              <br />
              <div className={styles.iconContainer}>
                <h1>You can see on the platforms.</h1>
                <br />
                <p>
                  <a
                    href="https://www.youtube.com/channel/UCTfcciUBkQH7ecExH7Qloaw"
                    target="_blank"
                  >
                    <svg
                      fill="#ff0000"
                      width="160px"
                      height="160px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ff0000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <title>youtube</title>{" "}
                        <path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"></path>{" "}
                      </g>
                    </svg>
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/neoxfangplay"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      fill="blue"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                </p>
                <p>
                  <a href="https://www.twitch.tv/neoxfangplay" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      fill="purple"
                      className="bi bi-twitch"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z" />
                      <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z" />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
