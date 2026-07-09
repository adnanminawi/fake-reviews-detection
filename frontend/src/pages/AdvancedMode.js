import { useState } from 'react';
import axios from 'axios';

export default function AdvancedMode() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = async () => {
    if (!review.trim()) return;
    setResult(null);
    try {
      const response = await axios.post('http://127.0.0.1:8000/predict/advanced', { review, rating });
      setResult(response.data);
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Advanced Mode — Rating-Aware DistilBERT</h2>
       <input
        type="text"
        name="review"
        placeholder="Enter a review"
        value={review}
        onChange={handleChange}
        required
      />
      <br/>
      <label>Rating: </label>
      <select value={rating} onChange={e => setRating(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map(r => <option key={r} value={r}>{r} stars</option>)}
      </select>
      <br/>

      

      <button onClick={handleSubmit}>Analyze 
      </button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Result</h3>
          <p><strong>Advanced DistilBERT:</strong> {result.distilbert_advanced.label}</p>
          <p><strong>Confidence:</strong> {(result.distilbert_advanced.confidence * 100).toFixed(1)}%</p>
        </div>
      )}
    </div>
  );
}