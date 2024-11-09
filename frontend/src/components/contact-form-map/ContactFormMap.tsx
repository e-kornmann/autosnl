import React from 'react'

import styles from "./contact-form-map.module.scss"
export const ContactFormMap = () => {
  return (
    <div className={styles.form_map_container}>
    <div className={styles.contact_map_container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4864.34735330328!2d4.813838476445098!3d52.439768572040286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5fcd18c2902ad%3A0x8cdd6222f6ace26f!2sStationsstraat%2071%2C%201506%20DE%20Zaandam!5e0!3m2!1sen!2snl!4v1723336999139!5m2!1sen!2snl"
        className={styles.map}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className={styles.contact_form_container}>
        <div className={styles.header}>Send us a message</div>
      <form className={styles.contact_form}>
        <div className={styles.input_container}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00002 1.33331C7.29278 1.33331 6.6145 1.61426 6.1144 2.11436C5.61431 2.61446 5.33335 3.29274 5.33335 3.99998C5.33335 4.70722 5.61431 5.3855 6.1144 5.8856C6.6145 6.38569 7.29278 6.66665 8.00002 6.66665C8.70726 6.66665 9.38554 6.38569 9.88564 5.8856C10.3857 5.3855 10.6667 4.70722 10.6667 3.99998C10.6667 3.29274 10.3857 2.61446 9.88564 2.11436C9.38554 1.61426 8.70726 1.33331 8.00002 1.33331ZM6.66669 3.99998C6.66669 3.64636 6.80716 3.30722 7.05721 3.05717C7.30726 2.80712 7.6464 2.66665 8.00002 2.66665C8.35364 2.66665 8.69278 2.80712 8.94283 3.05717C9.19288 3.30722 9.33335 3.64636 9.33335 3.99998C9.33335 4.3536 9.19288 4.69274 8.94283 4.94279C8.69278 5.19284 8.35364 5.33331 8.00002 5.33331C7.6464 5.33331 7.30726 5.19284 7.05721 4.94279C6.80716 4.69274 6.66669 4.3536 6.66669 3.99998ZM11.3334 7.99998H4.66669C4.13625 7.99998 3.62755 8.21069 3.25247 8.58577C2.8774 8.96084 2.66669 9.46955 2.66669 9.99998C2.66669 11.488 3.27869 12.68 4.28269 13.4866C5.27069 14.28 6.59602 14.6666 8.00002 14.6666C9.40402 14.6666 10.7294 14.28 11.7174 13.4866C12.72 12.68 13.3334 11.488 13.3334 9.99998C13.3334 9.46955 13.1226 8.96084 12.7476 8.58577C12.3725 8.21069 11.8638 7.99998 11.3334 7.99998ZM4.66669 9.33331H11.3334C11.5102 9.33331 11.6797 9.40355 11.8048 9.52857C11.9298 9.6536 12 9.82317 12 9.99998C12 11.0893 11.5667 11.8973 10.8827 12.4466C10.1814 13.0093 9.17335 13.3333 8.00002 13.3333C6.82669 13.3333 5.81869 13.0093 5.11735 12.4466C4.43335 11.8973 4.00002 11.0893 4.00002 9.99998C4.00002 9.82317 4.07026 9.6536 4.19528 9.52857C4.32031 9.40355 4.48988 9.33331 4.66669 9.33331Z"
              fill="#4C4C4C"
            />
          </svg>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className={styles.input_container}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H14C14.2652 13 14.5196 12.8946 14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3ZM12.9 4L8 7.39L3.1 4H12.9ZM2 12V4.455L7.715 8.41C7.7987 8.46806 7.89813 8.49918 8 8.49918C8.10187 8.49918 8.2013 8.46806 8.285 8.41L14 4.455V12H2Z"
              fill="#4C4C4C"
            />
          </svg>
          <input type="text" placeholder="Email Address" />
        </div>
        <div className={styles.input_number_container}>
          <select className={styles.country_select} id="country-select">
            {/* <option value="" disabled selected>
              Select a country
            </option> */}
            <option value="" disabled selected>
              Country Code
            </option>
            <option value="us">US (+1)</option>
            <option value="ca">CA (+1)</option>
            <option value="gb">UK (+44)</option>
            <option value="au">AU (+61)</option>
            <option value="in">IN (+91)</option>
          </select>
          <div className={styles.input_svg}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 13.3334C11.4965 13.3334 10.3445 13.052 9.16402 12.4894C7.98358 11.9267 6.88691 11.1367 5.87402 10.1194C4.86113 9.10202 4.07335 8.00535 3.51069 6.82935C2.94802 5.65335 2.66669 4.50358 2.66669 3.38002C2.66669 3.17646 2.73335 3.00691 2.86669 2.87135C3.00002 2.7358 3.16669 2.66758 3.36669 2.66669H5.01535C5.19669 2.66669 5.35491 2.7238 5.49002 2.83802C5.62513 2.95224 5.71646 3.09869 5.76402 3.27735L6.09469 4.86669C6.1258 5.05335 6.12024 5.21624 6.07802 5.35535C6.0358 5.49446 5.9618 5.60846 5.85602 5.69735L4.39335 7.06135C4.66713 7.5578 4.96958 8.01913 5.30069 8.44535C5.6318 8.87158 5.98513 9.27535 6.36069 9.65669C6.74735 10.0434 7.1638 10.4034 7.61002 10.7367C8.05624 11.0696 8.54602 11.3838 9.07935 11.6794L10.5054 10.228C10.6138 10.1111 10.7358 10.034 10.8714 9.99669C11.0065 9.9598 11.1562 9.95247 11.3207 9.97469L12.7227 10.2614C12.904 10.3058 13.0511 10.3971 13.164 10.5354C13.2769 10.6736 13.3334 10.8318 13.3334 11.01V12.6334C13.3334 12.8334 13.2654 13 13.1294 13.1334C12.9934 13.2667 12.8231 13.3334 12.62 13.3334ZM4.08002 6.43602L5.36002 5.25935C5.40224 5.22513 5.4298 5.17802 5.44269 5.11802C5.45602 5.05802 5.4538 5.00247 5.43602 4.95135L5.14069 3.53802C5.12335 3.47002 5.09335 3.41891 5.05069 3.38469C5.00802 3.35046 4.95269 3.33335 4.88469 3.33335H3.51669C3.46558 3.33335 3.42291 3.35046 3.38869 3.38469C3.35446 3.41891 3.33735 3.46158 3.33735 3.51269C3.35024 3.96824 3.42158 4.4438 3.55135 4.93935C3.68113 5.43491 3.85691 5.9338 4.08002 6.43602ZM9.71402 11.992C10.1647 12.2151 10.6447 12.3802 11.154 12.4874C11.6642 12.594 12.1087 12.6511 12.4874 12.6587C12.5385 12.6587 12.5811 12.6416 12.6154 12.6074C12.6496 12.5731 12.6667 12.5307 12.6667 12.48V11.1414C12.6667 11.0734 12.6496 11.0178 12.6154 10.9747C12.5811 10.932 12.53 10.9022 12.462 10.8854L11.2287 10.6327C11.1771 10.6154 11.132 10.6131 11.0934 10.626C11.0551 10.6394 11.0147 10.6671 10.972 10.7094L9.71402 11.992Z"
                fill="#4C4C4C"
              />
            </svg>
            <input type="tel" placeholder="Phone Number" />
          </div>
        </div>
        <div className={styles.input_container}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.328 5.00002H10.3333M12.328 5.00002H12.3333M14.6667 4.85535C14.6667 6.61669 13.174 8.04469 11.3333 8.04469C11.1165 8.04469 10.9016 8.02469 10.6887 7.98469C10.5354 7.95602 10.4587 7.94202 10.4053 7.95002C10.352 7.95802 10.276 7.99802 10.1253 8.07869C9.69398 8.30861 9.19754 8.38591 8.71668 8.29802C8.90048 8.07091 9.02509 7.80177 9.07935 7.51469C9.11268 7.33802 9.03002 7.16669 8.90602 7.04135C8.32747 6.46074 8.00182 5.67501 8.00002 4.85535C8.00002 3.09469 9.49268 1.66669 11.3333 1.66669C13.174 1.66669 14.6667 3.09469 14.6667 4.85535ZM5.00135 14.3334H3.14535C2.93002 14.3334 2.71335 14.3027 2.51535 14.218C1.87135 13.9414 1.54402 13.5754 1.39202 13.3467C1.35076 13.2833 1.3305 13.2086 1.33409 13.1331C1.33768 13.0576 1.36494 12.9852 1.41202 12.926C2.15868 11.934 3.89202 11.3354 5.00468 11.3354C6.11668 11.3354 7.84735 11.934 8.59402 12.926C8.68802 13.0507 8.70068 13.2167 8.61402 13.3467C8.46135 13.5754 8.13402 13.9414 7.49002 14.218C7.28994 14.2985 7.07564 14.3378 6.86002 14.3334H5.00135ZM6.85735 7.85935C6.857 8.10239 6.80878 8.34297 6.71546 8.56737C6.62213 8.79177 6.48551 8.99559 6.31342 9.16719C6.14132 9.33879 5.93711 9.47482 5.71244 9.5675C5.48777 9.66018 5.24705 9.7077 5.00402 9.70735C4.51342 9.70771 4.04276 9.51325 3.69548 9.16672C3.3482 8.82019 3.15272 8.34995 3.15202 7.85935C3.15228 7.61632 3.20041 7.37572 3.29365 7.15129C3.3869 6.92685 3.52344 6.72298 3.69548 6.55132C3.86751 6.37966 4.07168 6.24356 4.29631 6.15079C4.52094 6.05803 4.76165 6.01042 5.00468 6.01069C5.24772 6.01042 5.48842 6.05803 5.71305 6.15079C5.93769 6.24356 6.14185 6.37966 6.31389 6.55132C6.48592 6.72298 6.62246 6.92685 6.71571 7.15129C6.80896 7.37572 6.85709 7.61632 6.85735 7.85935Z"
              stroke="#4C4C4C"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="Reason for query" />
        </div>
        <textarea className={styles.text_area} name="" id="" />
        <button className={styles.submit_button}>Send</button>
      </form>
    </div>
  </div>
  )
}
