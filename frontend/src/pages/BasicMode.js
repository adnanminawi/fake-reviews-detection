import { useState } from 'react';
import axios from 'axios';

export default function BasicMode() {
  const [review, setReview] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    if (!review.trim()) return;
    setResult(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/basic', { review });
      setResult(response.data);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
  <div style={{ padding: 20 }}>
      <h2>Basic Mode — DistilBERT vs LogReg</h2>
      <input
        type="text"
        name="review"
        placeholder="Enter a review"
        value={review}
        onChange={handleChange}
        required
      />
      <br />
      <button onClick={handleSubmit}>Analyze</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Results</h3>
          <p><strong>DistilBERT:</strong> {result.distilbert.label} ({(result.distilbert.confidence * 100).toFixed(1)}%)</p>
          <p><strong>LogReg:</strong> {result.logreg.label} ({(result.logreg.confidence * 100).toFixed(1)}%)</p>
          <p><strong>Agreement:</strong> {result.agreement ? 'Both models agree' : 'Models disagree — borderline case'}</p>
        </div>
      )}
    </div>
  );
}