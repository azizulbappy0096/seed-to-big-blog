import { useEffect, useRef, useState } from "react";

function InputTags({ tags, setTags }) {
  const tagsContainer = useRef(null);
  let [tagCount, setTagCount] = useState(0);
  //   const [tags, setTags] = useState([]);

  useEffect(() => {
    document.execCommand("defaultParagraphSeparator", true, "p");
  }, []);

  const handleTags = (e) => {
    let key = e.key;
    let selected = document.getSelection();

    if (key === "Enter" || key === " ") {
      e.preventDefault();
      if (tagCount < 5 && selected.baseNode.textContent.length > 0) {
        let innerContent = selected.anchorNode.textContent;
        //
        setTags((prev) => [...prev, innerContent]);
        // dispatch({
        //   type: "SET_TAGS",
        //   payload: [...tags, innerContent],
        // });

        let div = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");

        div.classList.add(
          "d-flex",
          "align-items-center",
          "gap-2",
          "px-2",
          "py-1",
          "bg-white",
          "border",
          "text-break"
        );
        div.setAttribute("contentEditable", false);

        p.textContent = innerContent;
        button.textContent = "x";
        button.classList.add("border-0", "bg-transparent");

        button.onclick = (e) => {
          e.preventDefault();
          let innerContent = e.target.previousSibling.textContent;
          let tempArray = [...tags];
          let index = tempArray.indexOf(innerContent);
          tempArray.slice(index, 1);
          //
          setTags(tempArray);
          //   dispatch({
          //     type: "SET_TAGS",
          //     payload: tempArray,
          //   });
          setTagCount((prev) => prev - 1);

          e.path[0].parentElement.remove();

          if (tagsContainer.current.lastChild.nodeName !== "P") {
            let nextTag = document.createElement("p");
            tagsContainer.current.append(nextTag);

            var range = document.createRange();

            range.setStart(nextTag, 0);
            range.collapse(true);

            selected.removeAllRanges();
            selected.addRange(range);
          }
        };

        div.append(p);
        div.append(button);
        tagsContainer.current.append(div);
        selected.anchorNode.parentNode.nodeName === "P"
          ? tagsContainer.current.removeChild(selected.anchorNode.parentNode)
          : tagsContainer.current.removeChild(selected.anchorNode);

        if (tagCount < 4) {
          let nextTag = document.createElement("p");
          tagsContainer.current.append(nextTag);

          var range = document.createRange();

          range.setStart(nextTag, 0);
          range.collapse(true);

          selected.removeAllRanges();
          selected.addRange(range);
        }

        setTagCount((prev) => prev + 1);
      }
    } else if (
      key === "Backspace" &&
      selected.baseNode.textContent.length === 1
    ) {
      e.preventDefault();
      selected.baseNode.parentNode.innerHTML = "";
    } else if (
      key === "Backspace" &&
      selected.baseNode.textContent.length === 0
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="editorModal__tag grid place-content-stretch h-14 w-full border-2 rounded-md bg-gray-50 hover:bg-white">
      <div
        ref={tagsContainer}
        className="d-flex flex-wrap align-items-center gap-2 p-2 focus:bg-white"
        contentEditable={tagCount < 5 ? true : false}
        onKeyDown={handleTags}
      >
        <p></p>
      </div>
    </div>
  );
}

export default InputTags;
