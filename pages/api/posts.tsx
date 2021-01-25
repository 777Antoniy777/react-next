import { NextApiResponse } from "next";
import { PostProps } from "../../interfaces/posts";

const posts: PostProps[] = [
  { "id": 1, "title": "title 1", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo, turpis sed consectetur auctor, lacus ipsum rutrum ante, ut hendrerit velit dolor et arcu. Integer placerat at ex et elementum. Sed rhoncus, eros id posuere vulputate, metus dui pretium sem, quis tincidunt felis ipsum venenatis nunc. Duis semper lorem nec justo condimentum mollis." },
  { "id": 2, "title": "title 2", "body": "Morbi non dictum leo. Sed eu luctus dolor, pretium pulvinar nisi. Aliquam eget molestie metus, vitae tincidunt lectus. Sed elementum mi leo, eu feugiat leo sodales sed. Duis mollis massa vel sagittis pulvinar. Maecenas ornare efficitur purus ac eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque sodales tristique sem, vitae interdum nibh porttitor ac." },
  { "id": 3, "title": "title 3", "body": "Quisque eget cursus eros. In non dictum enim. Aenean iaculis enim at massa aliquet, ac pulvinar enim tincidunt. Curabitur tellus nulla, accumsan in mauris sit amet, ullamcorper lacinia nisl. Nulla vel ante id orci semper tincidunt. Nulla viverra urna risus, sed gravida enim volutpat eu. Sed et faucibus metus, eget molestie ligula." },
  { "id": 4, "title": "title 4", "body": "Vivamus iaculis fringilla eros, at blandit lacus convallis ac. Aliquam quis ligula interdum, finibus ex eu, tempor velit. Aenean ultricies fermentum elit, et feugiat nibh mollis nec. Fusce quis pharetra eros. Nullam aliquet ligula nunc, nec vestibulum metus feugiat quis. Nam et suscipit nunc. Ut pretium imperdiet vulputate." },
  { "id": 5, "title": "title 5", "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo, turpis sed consectetur auctor, lacus ipsum rutrum ante, ut hendrerit velit dolor et arcu. Integer placerat at ex et elementum. Sed rhoncus, eros id posuere vulputate, metus dui pretium sem, quis tincidunt felis ipsum venenatis nunc. Duis semper lorem nec justo condimentum mollis." }
];

// you can get posts data from this api
export default function echo(_, res: NextApiResponse) {
  res.json(posts);
}
