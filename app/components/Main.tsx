import React from 'react'
import Row from './Row';

const Main = () => {

  const imageBank01 = ["https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdG9q7mB7oKiPfsqjUCryoHuhQuqjDVjdoJc5FXRVcb8E3OVzl5tDUPaKNPvAUQMADQq9eP82OB1SXd4QjcCYapJn1qXrOjFKBRUk5FZqMnDdxRZ-jzSYIkB8EARzlNgNE8G_kSJkb_HsmeM9KdQB0JtHEVi7EWGVTx4s2dViGVyGEZC4fVTQpvGXG_dMZ0.jpg?r=02e", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTOQcdwws5s7aHIkXF2rbA49MvtMZBz68DlcHBlMGdjPlRXgrqN1Z0T7jr05SXFNV4_sLmr43rl9tuBLcSO_X2Ja66UIoWnNnW6EB4QGe4vUD45Tn28ofiXroUzUJ_i6IUnyILxP5Zfu5DSKhK5IQf2RwSWfN8bP7v1HY46ZaXXNidkU6CzIwwHKloUPBPzfV4XwcyerTp_Sz8Eoci-yxxpWUgaJY6YMEWMkjeXd6mCHUf8ZY0kaAhc2OL0hrGIrIkgobwyOD5y7jC2haLBhKyQGXq6_G3jobgPvgNzzIdhPLltfsKE_dy-B-Uurt2YylbYWCfZEnm5raQsN6swt5VY.webp?r=cbc", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXVoThpH7NZEkdsSXwH_5iGi6b4nb0VNhIwHGz97uxNuhqWMEkr1V_QvxfddX4gmtse039zX_C2Q6T_aDnAtvHt929xM_uGyQD86ETmv7ArW_5QzS7EJ_mxn9actONYRrAOz_wNta9J3KMnolFFdivm5djmTc5qx1NI.webp?r=7a1", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSnrvQEBl79TQAnJLulZC6mcQWFBIqXrEgIaqaecU-h6SK8vcMsW06-VPCPekETeIu1UJV7mrATTQN0eVs-Qy4-k7XONsh-B19Q.webp?r=aff", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT2K0eWN5KsiOq912bWcTK06XYIsr1sipalNxEz55bPozTxx3wdvKW4HvMQP9oUtG_H93Aasfv1MzDLKiiOoszXJpGqcWma1u9I.webp?r=d5c", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfuBxwODJWGpnxkkB_o4u6261-94UU3qXviCR10RUPHt_t2aUmLdxZSf9Ya1QPVE-RSGPIFap0ktl5E9IzJCdmOleGJlBtkgbJ9w5m7dY_HIg34-vtCLyJn7oD0YolAl8jOJ.jpg?r=8a4", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXnG-ZnaqKIONc1Hop7vzHZ8K7op-h4BIzb15ZF1ZnYWg8nKL68zYb8Ojr7ngvnUR9O67qTX7Z-xiSvAp8_0wR9clUcUhfgvIcWubI-vKC_-salzFBB9rDOEpjgdAq0gXcCYgvQ09lo-QXw_Ac6vQbfGbIIJmhKixmE.webp?r=dc9", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRfzXfjUhpeXl6Kb8S8nQxXxLiiCv-WZzsaf5LrAaB2pqnB3kTbGwMWsStahrA0a6k_SXfgIpHVLeEDNvSGJrNGb5K9gxZgp0K2CNS7oBpEeNyGLUdExKpF1RaBz2bYgL-4n9wW-ZnU-8pLD4APLK8Jb2b376MQMX00.webp?r=bef", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcxCQdF4J7ALY1V5g0l1K47xU7NYuqARLbWncXBC3oVkiRl3YeMOEHebsOZJKCu04j_CPSwyfPsEqkvd-ctp9xxpNPxmTFrP0upaPRcPCiKCmgNAQOJWK7qe-Bmh1OlwCwky.jpg?r=3bc", "https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY2PD6cmqVNZcw2ub9CqUbelSjY4fg6sXyynLEsATcw2s-w0zpPRvouGxVDavQgfvrUUyt-HNUhIKe32nDEoqSJV36DQs4MejIVJ1Nk5kEvmDIOpPwcxAVwPLrg5mQCWBUqLQFWiSiSP05degKLrM8UwrOvAdcqRIdqVRixeDL4-hWUURRHIqx5AXhODHCI-KAjIL4XV3ZF-SyHf2VrWHDtIAh6r3sUPGwU1tBs_285z5htDPPffyqrgshKrwPoaDQxJw2rqBhENPjUJDjIMi9NZ9riMDdssNulZbSB4mgNOMGqPtlaAVQ01KtP9GSwXd_RjudtbbXrND8U9HP-A-8hJvf1rpoXzFYMtDR978AUn6eBqI5_63kq_SdrEsX7657K7BLtBLkDD_8_4Wc1cUGRhn6VfGUatBnVSOJE_wG2oNwP7F0l9Iy04Sp2FQhu739mXhlhasBDVsJdA_XiIR7xdx1GazzTb2J4jZKQ1_ZkPdKZU5O3_MCu2Dw7v4EpfStQ.jpg?r=0ac"]

  return (
    <div className="pl-[4%] mt-[-12%] flex flex-col">
      <Row rowID='1' title='Top Searches' images={imageBank01} />
      <Row rowID='2' title='Telugu-Language Movies' images={imageBank01} />
      <Row rowID='3' title='Exciting Movies' images={imageBank01} />
      {/* <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} /> */}
      {/* <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} /> */}
    </div>
  )
}

export default Main