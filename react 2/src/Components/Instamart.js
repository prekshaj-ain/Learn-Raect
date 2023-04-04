import { useState } from "react";

const Section = function ({ title, description, isVisible, setIsVisible }) {
  return (
    <div className="m-2 p-2 border border-black">
      <h4 className="text-3xl">{title}</h4>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="underline font-bold"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="underline font-bold"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
    const [visible,setVisible] = useState("About");
  return (
    <>
      <h2 className="text-5xl m-5 font-bold">Instamart</h2>
      <Section
        isVisible={visible === "About"}
        setIsVisible={(value)=>{value ? setVisible("About"): setVisible("")}}
        title="About"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo ducimus nesciunt quia possimus id eaque quibusdam fuga mollitia. In architecto voluptatibus animi asperiores, qui soluta, nesciunt quasi molestias consequuntur ex illo est, itaque provident. Earum voluptatibus expedita porro assumenda numquam quo tempore veritatis voluptates dolorum iusto eveniet reiciendis deleniti sapiente, impedit, quaerat doloribus commodi quae. Et consectetur vero atque. Voluptatibus nisi, iusto alias cupiditate quae harum molestias consequatur saepe aperiam ratione accusamus! Sapiente quam doloribus necessitatibus consectetur error excepturi accusantium unde. Animi magnam atque veritatis veniam? Quaerat nobis nihil eos aut, doloremque ea ullam consequuntur obcaecati aliquid, expedita esse!"
      />
      <Section
        isVisible={visible === "Careers"}
        setIsVisible={(value)=>{value? setVisible("Careers") : setVisible("")}}
        title="Careers"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo ducimus nesciunt quia possimus id eaque quibusdam fuga mollitia. In architecto voluptatibus animi asperiores, qui soluta, nesciunt quasi molestias consequuntur ex illo est, itaque provident. Earum voluptatibus expedita porro assumenda numquam quo tempore veritatis voluptates dolorum iusto eveniet reiciendis deleniti sapiente, impedit, quaerat doloribus commodi quae. Et consectetur vero atque. Voluptatibus nisi, iusto alias cupiditate quae harum molestias consequatur saepe aperiam ratione accusamus! Sapiente quam doloribus necessitatibus consectetur error excepturi accusantium unde. Animi magnam atque veritatis veniam? Quaerat nobis nihil eos aut, doloremque ea ullam consequuntur obcaecati aliquid, expedita esse!"
      />
      <Section
        isVisible={visible === "Technology"}
        setIsVisible={(value => value ? setVisible("Technology"):setVisible(""))}
        title="Technology"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo ducimus nesciunt quia possimus id eaque quibusdam fuga mollitia. In architecto voluptatibus animi asperiores, qui soluta, nesciunt quasi molestias consequuntur ex illo est, itaque provident. Earum voluptatibus expedita porro assumenda numquam quo tempore veritatis voluptates dolorum iusto eveniet reiciendis deleniti sapiente, impedit, quaerat doloribus commodi quae. Et consectetur vero atque. Voluptatibus nisi, iusto alias cupiditate quae harum molestias consequatur saepe aperiam ratione accusamus! Sapiente quam doloribus necessitatibus consectetur error excepturi accusantium unde. Animi magnam atque veritatis veniam? Quaerat nobis nihil eos aut, doloremque ea ullam consequuntur obcaecati aliquid, expedita esse!"
      />
    </>
  );
};
export default Instamart;
