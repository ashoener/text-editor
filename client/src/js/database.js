import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

export const putDb = async (content) => {
  const db = await initdb();
  const tx = db.transaction("jate", "readwrite");
  tx.store.put({ id: 0, content });
  await tx.done;
};

export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction("jate", "readonly");
  const { content } = await tx.store.get(0);
  await tx.done;
  return content;
};

initdb();
