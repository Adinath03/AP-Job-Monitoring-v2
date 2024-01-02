export default function Card({ week, searchDay }) {
  return (
    <div className="schedule">
      {Object.entries(week).map(([day, items]) =>
        day === searchDay ? (
          <ul key={day}>
            <h2>{day}</h2>
            {items.map((weekday) => (
              <li key={weekday.name}>
                {weekday.name && (
                  <p>
                    <b>Name:</b> {weekday.name}
                  </p>
                )}
                {weekday.identification && (
                  <p>
                    <b>Identification:</b> {weekday.identification}
                  </p>
                )}
                {weekday.reguh && (
                  <p>
                    <b>REGUH:</b> {weekday.reguh}
                  </p>
                )}
                {weekday.idoc && (
                  <p>
                    <b>IDOC:</b> {weekday.idoc}
                  </p>
                )}
                {weekday.hol && (
                  <p>
                    <b>{weekday.hol}</b>
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )
      )}
    </div>
  );
}
