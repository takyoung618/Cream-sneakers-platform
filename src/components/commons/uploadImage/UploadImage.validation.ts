import { message } from "antd";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    message.error("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    message.error("파일이 너무 큽니다.(제한 : 5MB)");
    return false;
  }

  if (
    !file.type.includes("png") &&
    !file.type.includes("jpeg") &&
    !file.type.includes("jpg") &&
    !file.type.includes("webp")
  ) {
    message.error(
      "파일 확장자가 올바르지 않습니다.(png, jpeg, jpg, webp만 가능합니다.)"
    );
    return false;
  }
  return file;
}
