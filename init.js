import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "new-file.txt");
const fileContent = "Este es el contenido del nuevo archivo.";

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error("Error al crear el archivo:", err);
  } else {
    console.log("Archivo creado exitosamente en", filePath);
  }
});
