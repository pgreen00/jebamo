import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

export default function () {
  const files = glob.sync("src/components/**/*.md");

  return files.map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    const componentName = path.basename(filePath, ".md");

    return {
      name: componentName,
      title: data.title || componentName,
      content: content,
      data: data,
      sourcePath: filePath,
    };
  });
}
