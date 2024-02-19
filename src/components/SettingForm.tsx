"use client";
import styles from "@/app/styles/my.module.css";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SettingForm({ user }: { user: any }) {
  const [name, setName] = useState(user.name);
  const [blankName, setBlankName] = useState(false);
  const [change, setChange] = useState(false); // 정보에 변화가 있는지
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(true);
    setName(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!blankName) {
      fetch("/api/auth/changeInfo", {
        method: "POST",
        body: JSON.stringify({ id: user.id, name }),
      }).then((res) => {
        if (res.status === 200) {
          if (status === "authenticated") update({ name });
          window.alert("변경되었습니다.");
          router.refresh();
          router.push("/my");
        }
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={`${styles["info-wrapper"]} ${styles.mb}`}>
          <p>아이디</p>
          <span>{user.id}</span>
        </div>
        <div className={styles["info-wrapper"]}>
          <p>닉네임</p>
          <input
            name="id"
            type="text"
            value={name}
            onChange={onChangeName}
            onBlur={() => setBlankName(name.length <= 0)}
            placeholder="닉네임"
            className={`${styles.input} ${
              blankName ? styles["input-error"] : ""
            }`}
          />
        </div>
        <span className={blankName ? "" : `${styles.hidden}`}>
          닉네임을 입력해주세요.
        </span>
        <button type="submit" disabled={!change}>
          변경사항 저장
        </button>
      </form>
    </div>
  );
}
