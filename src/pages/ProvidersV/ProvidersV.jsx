import React from 'react'
import Table from '../../components/Table'
import ButtonNew from '../../components/ButtonNew'

const ProvidersV = () => {
  const columns = [
    {
        name: 'Nit',
        selector: row => row.nit,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Contact',
      selector: row => row.contact,
      sortable: true,
      right: true,
    },
    {
      name: 'Transaction',
      selector: row => row.transaction,
      sortable: true,
      right: true,
    },
    ];
    const Data = [
    { nit: 11111, name: 'Conan Edogawa', contact: '7' , transaction: '2'},
    { nit: 22222, name: 'Ran Mouri', contact: '17', transaction: '2' },
    { nit: 33333, name: 'Kogoro Mouri', contact: '38' , transaction: '2'},
    { nit: 44444, name: 'Ai Haibara', contact: '7' , transaction: '2'},
    { nit: 55555, name: 'Ayumi Yoshida', contact: '7' , transaction: '2'},
    { nit: 66666, name: 'Mitsuhiko Tsuburaya', contact: '7' , transaction: '2'},
    { nit: 77777, name: 'Genta Kojima', contact: '7' , transaction: '2'},
    { nit: 88888, name: 'Hiroshi Agasa', contact: '53' , transaction: '2'},
    { nit: 99999, name: 'Sonoko Suzuki', contact: '17' , transaction: '2'},
    { nit: 10000, name: 'Eri Kisaki', contact: '38' , transaction: '2'},
    { nit: 11000, name: 'Kaito Kuroba', contact: '17' , transaction: '2'},
    { nit: 12000, name: 'Shinichi Kudo', contact: '17' , transaction: '2'} 
    ]

  return (
    <div>
      <h1>Providers</h1>
      <ButtonNew/>
        <Table columns={columns} data={Data}/>
    </div>
  )
}

export default ProvidersV