from flask import Flask, jsonify
import google.generativeai as genai

app = Flask(__name__)

@app.route('/')
def index():
    return "Hello from Flask Backend!"

if __name__ == '__main__':
    app.run(debug=True)