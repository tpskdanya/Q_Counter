const data = {
  "Ростов-на-Дону": {
    "Джуниор-сейлс-эксперт": {unit:"Ставка", rate:213, bonus:142},
    "Сейлс-эксперт": {unit:"Ставка", rate:249, bonus:166},
    "Синьор-сейлс-эксперт": {unit:"Ставка", rate:300, bonus:200},
    "Джуниор-стор-менеджер": {unit:"Оклад", rate:58709, bonus:39139.3333},
    "Стор-менеджер": {unit:"Оклад", rate:62901, bonus:41934}
  },
  "Новочеркасск": {
    "Джуниор-сейлс-эксперт": {unit:"Ставка", rate:186, bonus:124},
    "Сейлс-эксперт": {unit:"Ставка", rate:218, bonus:145.3333},
    "Синьор-сейлс-эксперт": {unit:"Ставка", rate:261, bonus:174},
    "Джуниор-стор-менеджер": {unit:"Оклад", rate:51301, bonus:34200.6667},
    "Стор-менеджер": {unit:"Оклад", rate:54966, bonus:36644}
  },
  "Шахты": {
    "Джуниор-сейлс-эксперт": {unit:"Ставка", rate:199, bonus:132.6667},
    "Сейлс-эксперт": {unit:"Ставка", rate:233, bonus:155.3333},
    "Синьор-сейлс-эксперт": {unit:"Ставка", rate:280, bonus:186.6667},
    "Джуниор-стор-менеджер": {unit:"Оклад", rate:54867, bonus:36578},
    "Стор-менеджер": {unit:"Оклад", rate:58787, bonus:39191.3333}
  },
  "Таганрог": {
    "Джуниор-сейлс-эксперт": {unit:"Ставка", rate:173, bonus:115.3333},
    "Сейлс-эксперт": {unit:"Ставка", rate:203, bonus:135.3333},
    "Синьор-сейлс-эксперт": {unit:"Ставка", rate:244, bonus:162.6667},
    "Джуниор-стор-менеджер": {unit:"Оклад", rate:47735, bonus:31823.3333},
    "Стор-менеджер": {unit:"Оклад", rate:51144, bonus:34096}
  }
};

function calculate() {
  const city = document.getElementById("city").value;
  const grade = document.getElementById("grade").value;
  const hoursWith = parseFloat(document.getElementById("hoursWith").value) || 0;
  const hoursWithout = parseFloat(document.getElementById("hoursWithout").value) || 0;
  const format = document.getElementById("format").value;

  const entry = data[city][grade];
  let ratePerHour, bonusPerHour;

  if (entry.unit === "Ставка") {
    ratePerHour = entry.rate;
    bonusPerHour = entry.bonus;
  } else {
    ratePerHour = entry.rate / 157.5;
    bonusPerHour = entry.bonus / 157.5;
  }

  if (format === "САУ") {
    bonusPerHour *= 1.10;
  }

  const baseSalary = hoursWith * ratePerHour;
  const baseBonus = hoursWithout * bonusPerHour;

  const pay80 = baseSalary + 0.6 * baseBonus;
  const pay90 = baseSalary + 0.8 * baseBonus;
  const pay100 = baseSalary + 1.0 * baseBonus;
  const pay110 = baseSalary + 1.25 * baseBonus;

  document.getElementById("rate").textContent = ratePerHour.toFixed(2) + " ₽";
  document.getElementById("salary").textContent = baseSalary.toFixed(2) + " ₽";
  document.getElementById("bonus").textContent = bonusPerHour.toFixed(2) + " ₽";
  document.getElementById("pay80").textContent = pay80.toFixed(2) + " ₽";
  document.getElementById("pay90").textContent = pay90.toFixed(2) + " ₽";
  document.getElementById("pay100").textContent = pay100.toFixed(2) + " ₽";
  document.getElementById("pay110").textContent = pay110.toFixed(2) + " ₽";
}

document.getElementById("city").addEventListener("change", calculate);
document.getElementById("grade").addEventListener("change", calculate);
document.getElementById("hoursWith").addEventListener("input", calculate);
document.getElementById("hoursWithout").addEventListener("input", calculate);
document.getElementById("format").addEventListener("change", calculate);
calculate();
