// route('/projects/:projectId', './project.tsx')
import type { Route } from "./+types/contact";
import { Form, Link } from "react-router";

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let title = formData.get("title");
  console.log("contact data", title);
  return { name: "karan", age: 64 };
}

export default function Contact({ actionData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Project</h1>
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </Form>
      {actionData?.name ? <p>name {actionData.name} updated</p> : null}
      {actionData?.age ? <p> age {actionData.age} updated</p> : null}

      <br />
      <Link to="/">GO to home</Link>
    </div>
  );
}
