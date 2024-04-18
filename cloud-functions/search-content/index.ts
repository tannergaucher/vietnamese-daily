import * as functions from "@google-cloud/functions-framework";

functions.http("searchContent", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");

  if (req.method === "OPTIONS") {
    // Pre-flight request. Reply successfully:
    res.status(204).send("Preflight success");
    return;
  }

  const { search }: { search: string } = req.body;

  const content = searchContent({ search });

  res.status(200).send(content);
});

export function searchContent({ search }: { search?: string }) {
  const content = [
    {
      name: "Ella Lauda",
      image:
        "https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "designer",
      url: "#",
    },
    {
      name: "David Harrison",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "designer",
      url: "#",
    },
    {
      name: "James Collins",
      image:
        "https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "backend",
      url: "#",
    },
    {
      name: "Costa Quinn",
      image:
        "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "backend",
      url: "#",
    },
    {
      name: "Lewis Clarke",
      image:
        "https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "backend",
      url: "#",
    },
    {
      name: "Mia Maya",
      image:
        "https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      category: "backend",
      url: "#",
    },
  ];

  if (!search) {
    return content;
  }

  return content.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
}
