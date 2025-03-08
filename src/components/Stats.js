export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.trunc((numPacked / numItems) * 100);

  if (!numItems)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️."
          : `💼 You have ${numItems} item in your list, and you are already packed
        ${numPacked} (${percentage ? percentage : 0}%)`}
      </em>
    </footer>
  );
}
