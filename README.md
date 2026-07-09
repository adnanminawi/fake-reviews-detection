Models Links:
LogReg: https://colab.research.google.com/drive/19mItp-aNwsaQ52-pOaY0seQVsJM03190?usp=sharing
DBert basic: https://colab.research.google.com/drive/1EwL05d3ThH0kLbSw-9stvBedRUNZUWiK?usp=sharing
Advanced DBert: https://colab.research.google.com/drive/1a6N74WZgchhb-6UYE-tEX-uE0WaryFGM?usp=sharing

An NLP system that classifies product reviews as genuine or fake, comparing a fine-tuned DistilBERT transformer 
against a classical Logistic Regression + TF-IDF baseline — served through a FastAPI backend with a React frontend.

 Results

ModelF1 ScoreLogistic Regression + TF-IDF (baseline) 93%
Fine-tuned DistilBERT 97%
Rating-aware DistilBERT (advanced mode) 98.1%

Features

Basic mode — side-by-side predictions from DistilBERT and the LR + TF-IDF baseline, so users can compare a transformer against a classical approach on the same review
Advanced mode — a rating-aware DistilBERT variant that combines the review text with its star rating for higher accuracy
Web interface — paste any review and get a real/fake verdict with confidence

ML pipeline

Preprocessing: NLTK cleaning, tokenization, near-duplicate removal, dataset balancing
Training: Hugging Face Trainer API (fine-tuning run on Google Colab), with F1-optimized model selection
Iterative improvements: class weights, near-duplicate removal, and decision-threshold tuning
Baseline: TF-IDF features + Logistic Regression for an honest classical comparison
