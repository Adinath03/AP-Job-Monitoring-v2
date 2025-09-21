# AP Job Monitoring (v2.0)

A React-based tool to schedule and monitor SAP background jobs with **holiday-aware logic**.  
It ensures vendor payment jobs and other critical jobs are run on the correct working days, avoiding duplicate runs or missed deadlines due to holidays.

👉 Live (v1): [AP Job Monitoring](https://adinath03.github.io/AP-Job-Monitoring/)  
👉 This repository is for **v2.0 development**.

---

## ✨ Features

- 📅 **Holiday-aware job scheduling** with support for **holiday -1** and **holiday -2** rules.
- 🔄 **Two job types**:
  - **Regular jobs** → run on specific weekdays, but skip or adjust around holidays.
  - **Special jobs** → triggered only on holiday -1 or holiday -2.
- ⚙️ **Config-driven** → jobs and rules defined in `src/data/jobs.json`.
- 📊 **Interactive UI** → visualize and test how jobs are scheduled week by week.
- 🧩 Modular code in `src/utils` for date handling and scheduling logic.
- 🚀 Deployable to GitHub Pages.

---

## 🛠️ Getting Started (Local Development)

Clone the repo and install dependencies:

```bash
git clone https://github.com/Adinath03/AP-Job-Monitoring-v2.git
cd AP-Job-Monitoring-v2
npm install
```
