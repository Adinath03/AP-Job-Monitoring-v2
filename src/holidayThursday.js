const holidayThursday = {
  Monday: [
    {
      name: "USALL Checks",
      F110job: "PPADF_F110_USALL_PE1",
      paymentMediumJob: "PPADF_F110_USALL_PRNT*",
      identification: "USALL",
    },
    {
      name: "US ACH USTMT",
      F110job: "PPADF_F110_USTMT_PE1",
      paymentMediumJob: "PPADF_ACH_MT_PE1",
      identification: "USTMF",
    },
    {
      name: "US ACH OPAL",
      F110job: "PPADF_F110_OPAL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "OPAL",
    },
    {
      name: "Canada ACH",
      F110job: "PPADF_F110_CAALL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "CAALL",
      idocType: "PEXR2001",
    },
    {
      name: "WIREU",
      F110job: "PPADF_F110_WIREU_PE1",
      paymentMediumJob: "PPADO_DAUS_EDI820_WIREU_PE1",
      identification: "WIREU",
      idocType: "PEXR2002",
    },
  ],
  Tuesday: [
    {
      name: "USALL Checks",
      F110job: "PPADF_F110_USALL_PE1",
      paymentMediumJob: "PPADF_F110_USALL_PRNT*",
      identification: "USALL",
    },
    {
      name: "CANADA Checks",
      F110job: "PPADF_F110_CAACX_TW_PE1",
      paymentMediumJob: "PPADF_F110_CAACX_PRNT*",
      identification: "CAACX",
    },
    {
      name: "US ACH USTMT",
      F110job: "PPADF_F110_USTMT_PE1",
      paymentMediumJob: "PPADF_ACH_MT_PE1",
      identification: "USTMF",
    },
    {
      name: "US ACH OPAL",
      F110job: "PPADF_F110_OPAL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "OPAL",
    },
    {
      name: "Canada ACH",
      F110job: "PPADF_F110_CAALL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "CAALL",
      idocType: "PEXR2001",
    },
    {
      name: "WIREU",
      F110job: "PPADF_F110_WIREU_PE1",
      paymentMediumJob: "PPADO_DAUS_EDI820_WIREU_PE1",
      identification: "WIREU",
      idocType: "PEXR2002",
    },
    {
      name: "US ACH USTSP HOLIDAY2 (Special Job)",
      F110job: "PPADF_F110_USTSP_HOLIDAY2_PE1",
      paymentMediumJob: "PPADF_ACH_SP2_PE1",
      identification: "HOSP2",
    },
  ],
  Wednesday: [
    {
      name: "USALL Checks",
      F110job: "PPADF_F110_USALL_PE1",
      paymentMediumJob: "PPADF_F110_USALL_PRNT*",
      identification: "USALL",
    },
    {
      name: "CANADA Checks",
      F110job: "PPADF_F110_CAACX_TW_PE1",
      paymentMediumJob: "PPADF_F110_CAACX_PRNT*",
      identification: "CAACX",
    },
    {
      name: "US ACH OPAL",
      F110job: "PPADF_F110_OPAL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "OPAL",
    },
    {
      name: "Canada ACH",
      F110job: "PPADF_F110_CAALL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "CAALL",
      idocType: "PEXR2001",
    },
    {
      name: "WIREU",
      F110job: "PPADF_F110_WIREU_PE1",
      paymentMediumJob: "PPADO_DAUS_EDI820_WIREU_PE1",
      identification: "WIREU",
      idocType: "PEXR2002",
    },
    {
      name: "US ACH USTSP HOLIDAY2 (Special Job)",
      F110job: "PPADF_F110_USTSP_HOLIDAY2_PE1",
      paymentMediumJob: "PPADF_ACH_SP2_PE1",
      identification: "HOSP2",
    },
    {
      name: "ACH USTNOR HOLTHU (Special Job)",
      F110job: "PPADF_F110_USTNOR_HOLTHU_D1_PE1",
      paymentMediumJob: "PPADF_ACH_TNOR_HTHU_D1_PE1",
      identification: "TNTHU",
    },
  ],
  Thursday: [
    {
      hol: "Since Today is a holiday, no jobs will run, and we won't perform AP job monitoring.",
    },
  ],
  Friday: [
    {
      name: "USALL Checks",
      F110job: "PPADF_F110_USALL_PE1",
      paymentMediumJob: "PPADF_F110_USALL_PRNT*",
      identification: "USALL",
    },
    {
      name: "US ACH - USTFRI",
      F110job: "PPADF_F110_USTFRI_PE1",
      paymentMediumJob: "PPADF_ACH_FRI_PE1",
      identification: "USTFM",
    },
    {
      name: "US ACH OPAL",
      F110job: "PPADF_F110_OPAL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "OPAL",
    },
    {
      name: "Canada ACH",
      F110job: "PPADF_F110_CAALL_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "CAALL",
      idocType: "PEXR2001",
    },
    {
      name: "WIREU",
      F110job: "PPADF_F110_WIREU_PE1",
      paymentMediumJob: "PPADO_DAUS_EDI820_WIREU_PE1",
      identification: "WIREU",
      idocType: "PEXR2002",
    },
    {
      name: "US ACH USTFB",
      F110job: "PPADF_F110_USTFB_PE1",
      paymentMediumJob: "Spool generates in F110 Job",
      identification: "USTFB",
    },
  ],
};

export default holidayThursday;
