from flask import Flask, render_template
import json

app = Flask(__name__)

with open("data/korean.json", encoding="utf-8") as f:
    KOREAN = json.load(f)

@app.route("/")
def home():
    return render_template("index.html", data=KOREAN)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)

