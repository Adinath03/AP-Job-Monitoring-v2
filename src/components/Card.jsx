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

                {weekday.F110job !== undefined && (
                  <p>
                    <b>F110 Job:</b> {weekday.F110job}
                  </p>
                )}

                {weekday.paymentMediumJob && (
                  <p>
                    <b>Payment Medium Job:</b> {weekday.paymentMediumJob}
                  </p>
                )}

                {weekday.identification && (
                  <p>
                    <b>Identification:</b> {weekday.identification}
                  </p>
                )}

                {weekday.idocType && (
                  <p>
                    <b>IDOC Type:</b> {weekday.idocType}
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
        ) : null
      )}
    </div>
  );
}
