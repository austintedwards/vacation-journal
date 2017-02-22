
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vacation').del()
    .then(function () {
      // Inserts seed entries
      return knex('vacation').insert([
        {location: 'Breckenridge', start_date:'2016-12-24', end_date:'2017-01-02',entry:'The Edwards family spent the holidays in Breckenridge',image:'https://upload.wikimedia.org/wikipedia/en/e/eb/Breckenridge_Ski_Area_from_Dercum_Mountain,_Keystone_Ski_Area.jpg',map_link:'https://www.google.com/maps?rlz=1C5CHFA_enUS698US698&biw=1218&bih=629&q=breckenridge&bav=on.2,or.r_cp.&bvm=bv.147448319,d.cGc&dpr=2&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi61aSSo6TSAhVX7mMKHer5Do0Q_AUIBigB'},
        {location: 'Antigua', start_date:'2016-11-16', end_date:'2016-11-24',entry:'Joined the Certosimo family to the Carribean',image:'http://www.lighthousechapel.org/lci2/images/countries/Antigua_pic.jpg',map_link:'https://www.google.com/maps/place/Antigua/@17.0856211,-61.9296738,11z/data=!3m1!4b1!4m5!3m4!1s0x8c12eafa63522caf:0xcbf5cd495f1ab5fe!8m2!3d17.0746557!4d-61.8175207'},
        {location: 'Raft Trip', start_date:'2016-07-23', end_date:'2016-07-26',entry:'Spent two nights and three days on teh raft on the river in the desert canyon',image:'https://c1.staticflickr.com/6/5836/20402265368_81f0243b5c_b.jpg',map_link:'https://www.google.com/maps?q=McInnis+Canyon+National+Conservation+Area&rlz=1C5CHFA_enUS698US698&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiQpaC8o6TSAhUO2GMKHUCgCYQQ_AUICCgB'}
      ]);
    });
};
