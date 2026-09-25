// route('/projects/:projectId', './project.tsx')
import type { Route } from "./+types/contact";
import { Form, Link, NavLink, useNavigation } from "react-router";

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  let title = formData.get("title");
  console.log("contact data", title);

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 3000);
  });

  return { name: "karan", age: 64 };
}

export default function Contact({ actionData }: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isBusy = navigation.state !== "idle";

  return (
    <div>
      <h1>Project</h1>
      <Form method="post">
        <input type="text" name="title" />

        <button type="submit" disabled={isBusy}>
          {isSubmitting ? "Submitting..." : "Submit now"}
        </button>
      </Form>
      {actionData?.name ? <p>name {actionData.name} updated</p> : null}
      {actionData?.age ? <p> age {actionData.age} updated</p> : null}

      <br />
      <Link to="/contact2">GO to Contact 2</Link>
      <br />
      <NavLink to="/" end>
        Home
      </NavLink>
    </div>
  );
}
