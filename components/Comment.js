export default function Comment(comment) {
  const hasnestedComments = comment.comments.length > 0;
  return `<div class="nested-comments-${comment.level}">

    <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${
        hasnestedComments
          ? comment.comments.map((comment) => Comment(comment)).join("")
          : ""
      }
    </div>`;
}
