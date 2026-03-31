import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function RegisterModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirm) {
      setError("密碼不一致");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("註冊成功！");
      onClose();
    } catch (err) {
      setError("註冊失敗，請確認 email 格式與密碼長度（至少6位）");
    }
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <h2 style={{ marginBottom: "24px" }}>Join Now</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Password（至少6位）"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="確認 Password"
          type="password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          style={inputStyle}
        />

        {error && <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>}

        <button onClick={handleRegister} style={btnPrimary}>註冊</button>
        <button onClick={onClose} style={btnClose}>取消</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed", inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex", alignItems: "center", justifyContent: "center",
  zIndex: 100,
};

const modal = {
  background: "#1a1a1a", padding: "40px", borderRadius: "16px",
  width: "360px", display: "flex", flexDirection: "column", gap: "12px",
  color: "white",
};

const inputStyle = {
  padding: "12px", borderRadius: "8px", border: "1px solid #444",
  background: "#2a2a2a", color: "white", fontSize: "1rem",
};

const btnPrimary = {
  padding: "12px", background: "#e91e8c", color: "white",
  border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem",
};

const btnClose = {
  padding: "12px", background: "#333", color: "white",
  border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem",
};