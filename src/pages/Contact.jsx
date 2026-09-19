import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  
} from "lucide-react";

import GlassCard from "../components/common/GlassCard";
import SectionTitle from "../components/common/SectionTitle";

function Contact() {
  return (
    <section className="contact-page">

      <SectionTitle
        eyebrow="GET IN TOUCH"
        title="با من در ارتباط باش"
        description="اگر ایده‌ای برای یک پروژه مدرن و متفاوت داری، ما میتوانیم در تیم حرفه ای آن ایده را به اجرا دربیاریم."
        align="right"
      />

      <div className="contact-grid">

        {/* اطلاعات تماس */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <GlassCard>

            <span className="contact-label">
              CONTACT DETAILS
            </span>

            <h2>
              بیایید یک
              <span> تجربه متفاوت بسازیم.</span>
            </h2>

            <p className="contact-description">
              برای همکاری، پروژه‌های Front-End یا ایده‌های
              خلاقانه می‌توانی از طریق راه‌های ارتباطی زیر
              با من در تماس باشی.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>ایمیل</span>
                  <strong>amirahmadi@email.com</strong>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>موقعیت</span>
                  <strong>  ایران - سمنان</strong>
                </div>
              </div>

            </div>

            <div className="contact-socials">

              {/* <a href="#" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a> */}

            </div>

          </GlassCard>
        </motion.div>

        {/* فرم تماس */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <GlassCard>

            <form className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  نام
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="نام شما"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  ایمیل
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  پیام
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                <span>ارسال پیام</span>
                <Send size={18} />
              </button>

            </form>

          </GlassCard>
        </motion.div>

      </div>

    </section>
  );
}

export default Contact;