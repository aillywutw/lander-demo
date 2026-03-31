import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("登入成功！");
      onClose();
    } catch (err) {
      setError("帳號或密碼錯誤");
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google 登入成功！");
      onClose();
    } catch (err) {
      setError("Google 登入失敗");
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2 style={{ marginBottom: "24px" }}>Sign In</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} />
        {error && <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>}
        <button onClick={handleLogin} style={btnPrimary}>登入</button>
        <button onClick={handleGoogle} style={btnGoogle}>🔵 使用 Google 登入</button>
        <button onClick={onClose} style={btnClose}>取消</button>
      </div>
    </div>
  );
}

const overlay = { position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 };
const modal = { background: "#1a1a1a", padding: "40px", borderRadius: "16px", width: "360px", display: "flex", flexDirection: "column", gap: "12px", color: "white" };
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #444", background: "#2a2a2a", color: "white", fontSize: "1rem" };
const btnPrimary = { padding: "12px", background: "#e91e8c", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" };
const btnGoogle = { padding: "12px", background: "#4285F4", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" };
const btnClose = { padding: "12px", background: "#333", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" };