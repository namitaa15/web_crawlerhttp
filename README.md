# 🌐 Web Crawler CLI Tool

A command-line based **web crawler** built using **Node.js** that recursively extracts and analyzes internal links from a given website.  
It provides a detailed report showing how many times each internal page was found — helping understand site structure and link connectivity.

---

## 🚀 Features
- 🕸️ **Recursive Crawling:** Traverses all internal links within the same domain.  
- 🧩 **HTML Parsing:** Extracts links efficiently using the `JSDOM` library.  
- 🔗 **URL Normalization:** Converts relative and absolute links into a consistent format.  
- ⚙️ **Asynchronous Fetching:** Uses `async/await` for non-blocking network requests.  
- 🧠 **Error Handling:** Handles broken links, non-HTML responses, and invalid URLs.  
- 📊 **Reporting Module:** Displays link frequency and page stats sorted by count.  
- 🧱 **Modular Design:** Cleanly divided into crawling logic, reporting, and CLI execution files.  

---

## 🛠️ Tech Stack
- **Language:** JavaScript (ES6)
- **Runtime:** Node.js
- **Libraries:** JSDOM, Fetch API

---

## 📂 Project Structure
```plaintext
web-crawler-cli/
│
├── crawl.js        → Core crawler logic (fetches and parses internal links)
├── report.js       → Generates and prints crawl reports
└── main.js         → Entry point for CLI execution
```
## ⚙️ How It Works

1. Takes a **base URL** as a command-line argument.  
2. Recursively **fetches internal pages** from that URL.  
3. Parses **HTML content** using `JSDOM` to extract all links.  
4. Generates a **report** showing how many times each page was found.

## 🧑‍💻 How to Run
1. **Clone the Repository**
2. ```bash
   git clone https://github.com/namitaa15/web_crawlerhttp.git  
   cd web_crawlerhttp
   ```

3. **Install Dependencies**
   npm install  

4. **Run the Application**  
   You can run the crawler in two ways:  
   🟢 Using npm script →  npm start https://example.com  
   🟣 Using Node directly →  node main.js https://example.com  
 

>  Replace `https://example.com` with any valid URL to analyze its internal link structure.
