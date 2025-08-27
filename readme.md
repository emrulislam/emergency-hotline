1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## 📌 Difference Between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

### **1️⃣ `getElementById(id)`**
- **Returns:** The **single** element whose `id` matches the given string.  
- **Type:** `Element` (or `null` if not found).  
- **Notes:**  
  - Only **one** element per unique `id` in valid HTML.  
  - Fastest method for direct element lookup.  

---

### **2️⃣ `getElementsByClassName(className)`**
- **Returns:** A **live** `HTMLCollection` of all elements with the given class name.  
- **Type:** `HTMLCollection` (updates automatically if DOM changes).  
- **Access:** By index, e.g. `elements[0]`.  

---

### **3️⃣ `querySelector(cssSelector)`**
- **Returns:** The **first** element matching the provided CSS selector.  
- **Type:** `Element` (or `null`).  
- **Selector Power:** Supports any valid CSS selector (`.class`, `#id`, `tag`, combinations).  

---

### **4️⃣ `querySelectorAll(cssSelector)`**
- **Returns:** A **static** `NodeList` of all elements matching the selector.  
- **Type:** `NodeList` (does **not** update automatically).  
- **Access:** By index, or use `.forEach()` for iteration. 

2. How do you create and insert a new element into the DOM?

3. What is Event Bubbling and how does it work?

4. What is Event Delegation in JavaScript? Why is it useful?

5. What is the difference between preventDefault() and stopPropagation() methods?