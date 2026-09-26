import { useEffect, useState } from "react";

import {
  Settings,
  Save,
  Globe,
  Mail,
  Phone,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";

function AdminSettings() {
  const [settings, setSettings] = useState(() => {

    const saved =
      localStorage.getItem("am-site-settings");

    return saved
      ? JSON.parse(saved)
      : {
          siteName: "AM Atelier",
          email: "amirahmadi@email.com",
          phone: "",
          location: "ایران - سمنان",
          description:
            "طراحی تجربه‌های مدرن و متفاوت برای وب.",
        };
  });


  useEffect(() => {
    localStorage.setItem(
      "am-site-settings",
      JSON.stringify(settings)
    );
  }, [settings]);


  const updateField = (
    field,
    value
  ) => {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "am-site-settings",
      JSON.stringify(settings)
    );

    alert(
      "تنظیمات با موفقیت ذخیره شد."
    );
  };


  return (
    <section className="admin-settings-page">

      <div className="admin-products-top">

        <div>
          <span className="admin-eyebrow">
            SITE SETTINGS
          </span>

          <h1>
            تنظیمات
            <span> سایت</span>
          </h1>

          <p>
            اطلاعات عمومی سایت را از این قسمت مدیریت کن.
          </p>
        </div>

      </div>


      <GlassCard className="admin-settings-card">

        <div className="admin-card-heading">

          <div>
            <span>
              GENERAL SETTINGS
            </span>

            <h2>
              اطلاعات عمومی
            </h2>
          </div>

          <Settings size={22} />

        </div>


        <form
          className="admin-settings-form"
          onSubmit={handleSubmit}
        >

          <div className="admin-setting-field">

            <label>
              نام سایت
            </label>

            <div>
              <Globe size={17} />

              <input
                value={settings.siteName}
                onChange={(event) =>
                  updateField(
                    "siteName",
                    event.target.value
                  )
                }
              />

            </div>

          </div>


          <div className="admin-setting-field">

            <label>
              ایمیل
            </label>

            <div>
              <Mail size={17} />

              <input
                type="email"
                value={settings.email}
                onChange={(event) =>
                  updateField(
                    "email",
                    event.target.value
                  )
                }
              />

            </div>

          </div>


          <div className="admin-setting-field">

            <label>
              شماره تماس
            </label>

            <div>
              <Phone size={17} />

              <input
                type="tel"
                value={settings.phone}
                onChange={(event) =>
                  updateField(
                    "phone",
                    event.target.value
                  )
                }
              />

            </div>

          </div>


          <div className="admin-setting-field">

            <label>
              موقعیت
            </label>

            <div>
              <Globe size={17} />

              <input
                value={settings.location}
                onChange={(event) =>
                  updateField(
                    "location",
                    event.target.value
                  )
                }
              />

            </div>

          </div>


          <div className="admin-setting-field">

            <label>
              توضیحات سایت
            </label>

            <textarea
              rows="5"
              value={settings.description}
              onChange={(event) =>
                updateField(
                  "description",
                  event.target.value
                )
              }
            />

          </div>


          <button
            type="submit"
            className="admin-save-settings"
          >
            <Save size={17} />
            ذخیره تنظیمات
          </button>

        </form>

      </GlassCard>

    </section>
  );
}

export default AdminSettings;