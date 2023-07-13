import { motion } from "framer-motion";
import styles from "../css/Main.module.css";

function Main() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className={styles.main}>
          <div className={styles.video_viewer}>
            <video id={styles.main_video}
              autoPlay
              loop
              muted
            ><source src="/img/main_play.mp4" type="video/mp4" />
            </video>
            <video id={styles.sub_video}
              autoPlay
              loop
              muted
            ><source src="/img/main_play.mp4" type="video/mp4" />
            </video>
            <div id={styles.main_download_guider}>
              <div className={styles.main_download_description}>
                <img src="/img/Turbulent_Icon.png" className={styles.turbulent_icon}></img>
                <img src="/img/Turbulent_Logo.png" className={styles.turbulent_logo}></img>
                <span className={styles.main_download_writing}>4:4 character base Tactical FPS Game</span>
              </div>
              <div className={styles.button} id={styles.button_eng}>DOWNLOAD</div>
            </div>
          </div>
          <div className={styles.header_padder}></div>

          <div className={styles.linetext_turbulent}>
            <img src="/liner/liner_turbulent.png"></img>
          </div>

          <div className={styles.main_desc_game}>
            <img src="/img/real_view.png"></img>

            <div className={styles.main_desc_group}>
              <span>TURBULENT</span>
              <p id={styles.p_desc}>최대 8명이 개인 또는 팀을 맺어
                  개인 또는 팀을 맺어 전략적 플레이를 통해 승리를 쟁취하는 게임입니다.<br></br><br></br>
                  4:4 팀전과 데스매치에서 자신의 실력을 증명하세요!</p>

              <button className={styles.button} id={styles.button_ko}>게임 알아보기</button>
            </div>


</div>

        </div>
    </motion.div>
  );
};
export default Main;