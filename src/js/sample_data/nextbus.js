// The data returned is actually in XML, this is just what the X2JS library outputs

export const SAMPLE_PREDICTION = {
  direction: {
    prediction: [
      {
        _epochTime: '1588198229803',
        _seconds: '296',
        _minutes: '0',
        _isDeparture: 'false',
        _dirTag: '14___I_F00',
        _vehicle: '6609',
        _block: '1620',
        _tripTag: '9359239',
        $$hashKey: 'object:19',
      },
      {
        _epochTime: '1588198681179',
        _seconds: '747',
        _minutes: '12',
        _isDeparture: 'false',
        _dirTag: '14___I_F00',
        _vehicle: '6599',
        _block: '1622',
        _tripTag: '9359240',
        $$hashKey: 'object:20',
      }, { _epochTime: '1588199412858', _seconds: '1479', _minutes: '24', _isDeparture: 'false', _dirTag: '14___I_F00', _vehicle: '6547', _block: '1633', _tripTag: '9359237', $$hashKey: 'object:21' }, { _epochTime: '1588199419316', _seconds: '1486', _minutes: '24', _isDeparture: 'false', _dirTag: '14___I_F00', _vehicle: '6533', _block: '1628', _tripTag: '9359243', $$hashKey: 'object:22' }],
    _title: 'Inbound to Ferry Plaza',
  },
  message: [
    {
      _text: 'Service frequency for this stop is 10 minutes or less.',
      _priority: 'Normal',
    },
    {
      _text: 'Muni for essential trips only. Masks or face coverings are required. Practice physical distancing. Visit sfmta.com/COVID19 for more info.',
      _priority: 'Low',
    }, { _text: 'Text COVID19SF to 888-777 for official updates. Visit sfdph.org', _priority: 'Low' }, { _text: 'Board thru rear doors. Front door for accessibility needs only.', _priority: 'Normal' }],
  _agencyTitle: 'SF Muni',
  _routeTitle: '14-Mission',
  _routeTag: '14',
  _stopTitle: 'Mission St & 24th St',
  _stopTag: '5565',
  $$hashKey: 'object:17',
  className: '',
  _dirTitleBecauseNoPredictions: 'Inbound to Ferry Plaza', // hacked in for testing
};

// FIXME
export const SAMPLE_FAILED_PREDICTIONS = {

};

export const SAMPLE_PREDICTIONS_XML = `
<?xml version="1.0" encoding="utf-8" ?> 
<body copyright="All data copyright San Francisco Muni 2020.">
  <predictions agencyTitle="SF Muni" routeTitle="12-Folsom-Pacific" routeTag="12" stopTitle="Pacific Ave &amp; Grant Ave" stopTag="5837" dirTitleBecauseNoPredictions="Inbound to Van Ness">
    <message text="Muni for essential trips only. Masks or face coverings are required. Practice physical distancing. Visit sfmta.com/COVID19 for more info." priority="Low"/>
    <message text="Text COVID19SF to 888-777 for official updates. Visit sfdph.org" priority="Low"/>
  </predictions>
  <predictions agencyTitle="SF Muni" routeTitle="14-Mission" routeTag="14" stopTitle="Mission St &amp; 24th St" stopTag="5565">
    <direction title="Inbound to Ferry Plaza">
      <prediction epochTime="1588394902295" seconds="11" minutes="0" isDeparture="false" dirTag="14___I_F00" vehicle="6591" block="1631" tripTag="9359290" />
      <prediction epochTime="1588395526282" seconds="635" minutes="10" isDeparture="false" dirTag="14___I_F00" vehicle="6539" block="1633" tripTag="9359291" />
    </direction>
    <message text="Service frequency for this stop is 10 minutes or less." priority="Normal"/>
    <message text="Muni for essential trips only. Masks or face coverings are required. Practice physical distancing. Visit sfmta.com/COVID19 for more info." priority="Low"/>
    <message text="Text COVID19SF to 888-777 for official updates. Visit sfdph.org" priority="Low"/>
    <message text="Board thru rear doors. Front door for accessibility needs only." priority="Normal"/>
  </predictions>
</body>
`;

// This has been truncated from the 12,000 lines that it originally was
export const SAMPLE_ROUTE_CONFIG_XML = `
<?xml version="1.0" encoding="utf-8" ?> 
<body copyright="All data copyright San Francisco Muni 2020.">
  <route tag="14" title="14-Mission" color="339999" oppositeColor="000000" latMin="37.7059999" latMax="37.79426" lonMin="-122.46137" lonMax="-122.39328">
    <stop tag="6498" title="Steuart &amp; Mission St" lat="37.7932499" lon="-122.39328" stopId="16498"/>
    <stop tag="5623" title="Mission St &amp; Spear St OB" lat="37.79239" lon="-122.3943499" stopId="15623"/>
    <stop tag="5579" title="Mission St &amp; Beale St" lat="37.7911399" lon="-122.39592" stopId="15579"/>
    <stop tag="5528" title="Mission St &amp; 1st St" lat="37.7899199" lon="-122.39749" stopId="15528"/>
    <stop tag="5529" title="Mission St &amp; 2nd St" lat="37.7877499" lon="-122.40024" stopId="15529"/>
    <stop tag="5532" title="Mission St &amp; 3rd St" lat="37.78597" lon="-122.4024899" stopId="15532"/>
    <stop tag="5534" title="Mission St &amp; 4th St" lat="37.78436" lon="-122.4045199" stopId="15534"/>
    <stop tag="5536" title="Mission St &amp; 5th St" lat="37.7827299" lon="-122.40664" stopId="15536"/>
    <stop tag="5538" title="Mission St &amp; 6th St" lat="37.78075" lon="-122.4090999" stopId="15538"/>
    <stop tag="5539" title="Mission St &amp; 7th St" lat="37.77897" lon="-122.4113499" stopId="15539"/>
    <stop tag="5540" title="Mission St &amp; 8th St" lat="37.7772299" lon="-122.41355" stopId="15540"/>
    <stop tag="5543" title="Mission St &amp; 9th St" lat="37.77594" lon="-122.4151799" stopId="15543"/>
    <stop tag="5545" title="Mission St &amp; 11th St" lat="37.7743099" lon="-122.41729" stopId="15545"/>
    <stop tag="5836" title="Otis St &amp; 12th St" lat="37.77281" lon="-122.4191699" stopId="15836"/>
    <stop tag="5835" title="150 Otis St" lat="37.77073" lon="-122.42031" stopId="15835"/>
    <stop tag="5548" title="Mission St &amp; 14th St" lat="37.7677999" lon="-122.4200199" stopId="15548"/>
    <stop tag="5552" title="Mission St &amp; 16th St" lat="37.7650399" lon="-122.41973" stopId="15552"/>
    <stop tag="5554" title="Mission St &amp; 18th St" lat="37.7617599" lon="-122.4194599" stopId="15554"/>
    <stop tag="5558" title="Mission St &amp; 20th St" lat="37.7581699" lon="-122.4190899" stopId="15558"/>
    <stop tag="5562" title="Mission St &amp; 22nd St" lat="37.75517" lon="-122.4188" stopId="15562"/>
    <stop tag="5566" title="Mission St &amp; 24th St" lat="37.7519599" lon="-122.41853" stopId="15566"/>
    <stop tag="5568" title="Mission St &amp; 26th St" lat="37.7485699" lon="-122.4181799" stopId="15568"/>
    <stop tag="5626" title="Mission St &amp; Valencia St" lat="37.7450799" lon="-122.4203" stopId="15626"/>
    <stop tag="5572" title="Mission St &amp; 30th St" lat="37.7424199" lon="-122.42199" stopId="15572"/>
    <stop tag="5584" title="Mission St &amp; Cortland Ave" lat="37.7410799" lon="-122.42287" stopId="15584"/>
    <stop tag="5578" title="Mission St &amp; Appleton Ave" lat="37.7389899" lon="-122.42404" stopId="15578"/>
    <stop tag="5597" title="Mission St &amp; Highland Ave" lat="37.73706" lon="-122.4241999" stopId="15597"/>
    <stop tag="5614" title="Mission St &amp; Richland Ave" lat="37.73562" lon="-122.4246999" stopId="15614"/>
    <stop tag="5580" title="Mission St &amp; Bosworth St" lat="37.73334" lon="-122.4268199" stopId="15580"/>
    <stop tag="5573" title="4080 Mission St" lat="37.73217" lon="-122.4279999" stopId="15573"/>
    <stop tag="5625" title="Mission St &amp; Trumbull St" lat="37.7304499" lon="-122.42971" stopId="15625"/>
    <stop tag="5621" title="Mission St &amp; Silver Ave" lat="37.7287199" lon="-122.43135" stopId="15621"/>
    <stop tag="5590" title="Mission St &amp; Francis St" lat="37.72635" lon="-122.4336499" stopId="15590"/>
    <stop tag="5607" title="Mission St &amp; Norton St" lat="37.72431" lon="-122.4351899" stopId="15607"/>
    <stop tag="5616" title="Mission St &amp; Ruth St" lat="37.72281" lon="-122.4363299" stopId="15616"/>
    <stop tag="5609" title="Mission St &amp; Onondaga Ave" lat="37.72128" lon="-122.4374799" stopId="15609"/>
    <stop tag="5598" title="Mission St &amp; Italy Ave" lat="37.71915" lon="-122.4390899" stopId="15598"/>
    <stop tag="5592" title="Mission St &amp; Geneva Ave" lat="37.7164599" lon="-122.44115" stopId="15592"/>
    <stop tag="5604" title="Mission St &amp; Mt Vernon Ave" lat="37.7146999" lon="-122.4426499" stopId="15604"/>
    <stop tag="5589" title="Mission St &amp; Foote Ave" lat="37.71285" lon="-122.4446199" stopId="15589"/>
    <stop tag="5602" title="Mission St &amp; Lowell St" lat="37.7114299" lon="-122.44649" stopId="15602"/>
    <stop tag="5627" title="Mission St &amp; Whittier St" lat="37.71048" lon="-122.4483399" stopId="15627"/>
    <stop tag="5600" title="Mission St &amp; Lawrence Ave" lat="37.7095" lon="-122.4508699" stopId="15600"/>
    <stop tag="5619" title="Mission St &amp; Sickles Ave" lat="37.7086599" lon="-122.45332" stopId="15619"/>
    <stop tag="5594" title="Mission St &amp; Goethe St" lat="37.70736" lon="-122.4570799" stopId="15594"/>
    <stop tag="5588" title="Mission St &amp; Flournoy St" lat="37.7068199" lon="-122.45906" stopId="15588"/>
    <stop tag="37099" title="Mission St &amp; San Jose Ave OB" lat="37.7059999" lon="-122.46137" stopId="137099"/>
    <stop tag="7099" title="Mission St &amp; San Jose Ave OB" lat="37.7059999" lon="-122.46137" stopId="17099"/>
    <stop tag="5585" title="Mission St &amp; Evergreen St" lat="37.7074099" lon="-122.45653" stopId="15585"/>
    <stop tag="5574" title="Mission St &amp; Acton St" lat="37.70881" lon="-122.4525799" stopId="15574"/>
    <stop tag="5608" title="Mission St &amp; Oliver St" lat="37.70962" lon="-122.4500599" stopId="15608"/>
    <stop tag="5628" title="Mission St &amp; Whittier St" lat="37.71022" lon="-122.4484499" stopId="15628"/>
    <stop tag="5601" title="Mission St &amp; Lowell St" lat="37.7114699" lon="-122.44629" stopId="15601"/>
    <stop tag="5595" title="Mission St &amp; Guttenberg St" lat="37.7125099" lon="-122.44475" stopId="15595"/>
    <stop tag="5575" title="Mission St &amp; Allison St" lat="37.7144799" lon="-122.44264" stopId="15575"/>
    <stop tag="5593" title="Mission St &amp; Geneva Ave" lat="37.7166399" lon="-122.44078" stopId="15593"/>
    <stop tag="5599" title="Mission St &amp; Italy Ave" lat="37.7186499" lon="-122.43926" stopId="15599"/>
    <stop tag="5615" title="Mission St &amp; Russia Ave" lat="37.7214699" lon="-122.43712" stopId="15615"/>
    <stop tag="5610" title="Mission St &amp; Persia Ave" lat="37.72338" lon="-122.4356799" stopId="15610"/>
    <stop tag="5582" title="Mission St &amp; Brazil Ave" lat="37.72454" lon="-122.4348099" stopId="15582"/>
    <stop tag="5586" title="Mission St &amp; Excelsior Ave" lat="37.7263599" lon="-122.43351" stopId="15586"/>
    <stop tag="5620" title="Mission St &amp; Silver Ave" lat="37.7287199" lon="-122.43132" stopId="15620"/>
    <stop tag="5624" title="Mission St &amp; Trumbull St" lat="37.7306599" lon="-122.42927" stopId="15624"/>
    <stop tag="5605" title="Mission St &amp; Murray St" lat="37.73404" lon="-122.4259199" stopId="15605"/>
    <stop tag="5613" title="Mission St &amp; Richland Ave" lat="37.73591" lon="-122.4244199" stopId="15613"/>
    <stop tag="5596" title="Mission St &amp; Highland Ave" lat="37.7374499" lon="-122.42396" stopId="15596"/>
    <stop tag="5577" title="Mission St &amp; Appleton Ave" lat="37.73887" lon="-122.42387" stopId="15577"/>
    <stop tag="5583" title="Mission St &amp; Cortland Ave" lat="37.74105" lon="-122.4227599" stopId="15583"/>
    <stop tag="5571" title="Mission St &amp; 30th St" lat="37.7424099" lon="-122.42194" stopId="15571"/>
    <stop tag="7841" title="Mission St &amp; Power St" lat="37.74625" lon="-122.4193999" stopId="17841"/>
    <stop tag="5567" title="Mission St &amp; 26th St" lat="37.7495099" lon="-122.4181" stopId="15567"/>
    <stop tag="5565" title="Mission St &amp; 24th St" lat="37.7523599" lon="-122.4184" stopId="15565"/>
    <stop tag="5561" title="Mission St &amp; 22nd St" lat="37.75582" lon="-122.41871" stopId="15561"/>
    <stop tag="5557" title="Mission St &amp; 20th St" lat="37.75911" lon="-122.41902" stopId="15557"/>
    <stop tag="5553" title="Mission St &amp; 18th St" lat="37.76264" lon="-122.41935" stopId="15553"/>
    <stop tag="5551" title="Mission St &amp; 16th St" lat="37.7651299" lon="-122.41967" stopId="15551"/>
    <stop tag="5547" title="Mission St &amp; 14th St" lat="37.76862" lon="-122.41993" stopId="15547"/>
    <stop tag="5546" title="Mission St &amp; 13th St" lat="37.77047" lon="-122.4197799" stopId="15546"/>
    <stop tag="7299" title="Mission St &amp; South Van Ness Ave" lat="37.77299" lon="-122.4184799" stopId="17299"/>
    <stop tag="5544" title="Mission St &amp; 11th St" lat="37.7743199" lon="-122.41712" stopId="15544"/>
    <stop tag="5542" title="Mission St &amp; 9th St" lat="37.7764499" lon="-122.41431" stopId="15542"/>
    <stop tag="5541" title="Mission St &amp; 8th St" lat="37.7776999" lon="-122.41273" stopId="15541"/>
    <stop tag="7129" title="Mission St &amp; 7th St" lat="37.7793499" lon="-122.4105" stopId="17129"/>
    <stop tag="5537" title="Mission St &amp; 6th St" lat="37.7811899" lon="-122.40831" stopId="15537"/>
    <stop tag="5535" title="Mission St &amp; 5th St" lat="37.7827199" lon="-122.40652" stopId="15535"/>
    <stop tag="5533" title="Mission St &amp; 4th St" lat="37.7846399" lon="-122.40393" stopId="15533"/>
    <stop tag="5531" title="Mission St &amp; 3rd St" lat="37.7865099" lon="-122.40157" stopId="15531"/>
    <stop tag="5530" title="Mission St &amp; 2nd St" lat="37.7878699" lon="-122.39985" stopId="15530"/>
    <stop tag="7945" title="Mission &amp; Fremont" lat="37.79026" lon="-122.3967899" stopId="17945"/>
    <stop tag="5336" title="Main St &amp; Market St" lat="37.79253" lon="-122.39567" stopId="15336"/>
    <stop tag="5693" title="Market St &amp; Steuart St" lat="37.79426" lon="-122.3949099" stopId="15693"/>
    <stop tag="36498" title="Steuart &amp; Mission St" lat="37.7932499" lon="-122.39328" stopId="136498"/>
    <direction tag="14___I_F00" title="Inbound to Ferry Plaza" name="Inbound" useForUI="true">
      <stop tag="7099" />
      <stop tag="5585" />
      <stop tag="5574" />
      <stop tag="5608" />
      <stop tag="5628" />
      <stop tag="5601" />
      <stop tag="5595" />
      <stop tag="5575" />
      <stop tag="5593" />
      <stop tag="5599" />
      <stop tag="5615" />
      <stop tag="5610" />
      <stop tag="5582" />
      <stop tag="5586" />
      <stop tag="5620" />
      <stop tag="5624" />
      <stop tag="5605" />
      <stop tag="5613" />
      <stop tag="5596" />
      <stop tag="5577" />
      <stop tag="5583" />
      <stop tag="5571" />
      <stop tag="7841" />
      <stop tag="5567" />
      <stop tag="5565" />
      <stop tag="5561" />
      <stop tag="5557" />
      <stop tag="5553" />
      <stop tag="5551" />
      <stop tag="5547" />
      <stop tag="5546" />
      <stop tag="7299" />
      <stop tag="5544" />
      <stop tag="5542" />
      <stop tag="5541" />
      <stop tag="7129" />
      <stop tag="5537" />
      <stop tag="5535" />
      <stop tag="5533" />
      <stop tag="5531" />
      <stop tag="5530" />
      <stop tag="7945" />
      <stop tag="5336" />
      <stop tag="5693" />
      <stop tag="36498" />
    </direction>
    <direction tag="14___O_F00" title="Outbound to Daly City" name="Outbound" useForUI="true">
      <stop tag="6498" />
      <stop tag="5623" />
      <stop tag="5579" />
      <stop tag="5528" />
      <stop tag="5529" />
      <stop tag="5532" />
      <stop tag="5534" />
      <stop tag="5536" />
      <stop tag="5538" />
      <stop tag="5539" />
      <stop tag="5540" />
      <stop tag="5543" />
      <stop tag="5545" />
      <stop tag="5836" />
      <stop tag="5835" />
      <stop tag="5548" />
      <stop tag="5552" />
      <stop tag="5554" />
      <stop tag="5558" />
      <stop tag="5562" />
      <stop tag="5566" />
      <stop tag="5568" />
      <stop tag="5626" />
      <stop tag="5572" />
      <stop tag="5584" />
      <stop tag="5578" />
      <stop tag="5597" />
      <stop tag="5614" />
      <stop tag="5580" />
      <stop tag="5573" />
      <stop tag="5625" />
      <stop tag="5621" />
      <stop tag="5590" />
      <stop tag="5607" />
      <stop tag="5616" />
      <stop tag="5609" />
      <stop tag="5598" />
      <stop tag="5592" />
      <stop tag="5604" />
      <stop tag="5589" />
      <stop tag="5602" />
      <stop tag="5627" />
      <stop tag="5600" />
      <stop tag="5619" />
      <stop tag="5594" />
      <stop tag="5588" />
      <stop tag="37099" />
    </direction>
    <path>
    <point lat="37.72872" lon="-122.43135"/>
    <point lat="37.72732" lon="-122.43282"/>
    <point lat="37.7263499" lon="-122.43365"/>
    <point lat="37.72431" lon="-122.43519"/>
    <point lat="37.72281" lon="-122.43633"/>
    <point lat="37.72128" lon="-122.43748"/>
    <point lat="37.71915" lon="-122.43909"/>
    <point lat="37.71646" lon="-122.44115"/>
    </path>
    <path>
    <point lat="37.77432" lon="-122.41712"/>
    <point lat="37.77528" lon="-122.41592"/>
    <point lat="37.7764499" lon="-122.41431"/>
    <point lat="37.7777" lon="-122.41273"/>
    <point lat="37.77935" lon="-122.4105"/>
    <point lat="37.78119" lon="-122.40831"/>
    <point lat="37.78272" lon="-122.40652"/>
    </path>
    <path>
    <point lat="37.76504" lon="-122.41973"/>
    <point lat="37.76176" lon="-122.41946"/>
    <point lat="37.75817" lon="-122.41909"/>
    <point lat="37.75517" lon="-122.4188"/>
    <point lat="37.7519599" lon="-122.41853"/>
    </path>
    <path>
    <point lat="37.75236" lon="-122.4184"/>
    <point lat="37.75582" lon="-122.41871"/>
    <point lat="37.75911" lon="-122.41902"/>
    <point lat="37.76264" lon="-122.41935"/>
    <point lat="37.76513" lon="-122.41967"/>
    </path>
    <path>
    <point lat="37.78272" lon="-122.40652"/>
    <point lat="37.78464" lon="-122.40393"/>
    <point lat="37.78651" lon="-122.40157"/>
    <point lat="37.78787" lon="-122.39985"/>
    <point lat="37.79026" lon="-122.39679"/>
    <point lat="37.7918499" lon="-122.39495"/>
    <point lat="37.79253" lon="-122.39567"/>
    <point lat="37.7931" lon="-122.39652"/>
    <point lat="37.79426" lon="-122.39491"/>
    <point lat="37.79448" lon="-122.39476"/>
    <point lat="37.79342" lon="-122.39344"/>
    <point lat="37.79325" lon="-122.39328"/>
    </path>
    <path>
    <point lat="37.72872" lon="-122.43132"/>
    <point lat="37.73066" lon="-122.42927"/>
    <point lat="37.73404" lon="-122.42592"/>
    <point lat="37.73537" lon="-122.42471"/>
    <point lat="37.7359099" lon="-122.42442"/>
    <point lat="37.73724" lon="-122.42408"/>
    <point lat="37.73745" lon="-122.42396"/>
    <point lat="37.73887" lon="-122.42387"/>
    <point lat="37.73924" lon="-122.42394"/>
    <point lat="37.73956" lon="-122.4238"/>
    <point lat="37.74105" lon="-122.42276"/>
    <point lat="37.74241" lon="-122.42194"/>
    </path>
    <path>
    <point lat="37.7519599" lon="-122.41853"/>
    <point lat="37.74857" lon="-122.41818"/>
    <point lat="37.74848" lon="-122.41811"/>
    <point lat="37.74817" lon="-122.41823"/>
    <point lat="37.74678" lon="-122.41913"/>
    <point lat="37.74508" lon="-122.4203"/>
    <point lat="37.74242" lon="-122.42199"/>
    </path>
    <path>
    <point lat="37.79325" lon="-122.39328"/>
    <point lat="37.79324" lon="-122.39319"/>
    <point lat="37.79239" lon="-122.39435"/>
    <point lat="37.79114" lon="-122.39592"/>
    <point lat="37.78992" lon="-122.39749"/>
    <point lat="37.78775" lon="-122.40024"/>
    <point lat="37.78597" lon="-122.40249"/>
    <point lat="37.78436" lon="-122.40452"/>
    <point lat="37.78273" lon="-122.40664"/>
    </path>
    <path>
    <point lat="37.706" lon="-122.46137"/>
    <point lat="37.70741" lon="-122.45653"/>
    <point lat="37.70881" lon="-122.45258"/>
    <point lat="37.70962" lon="-122.45006"/>
    <point lat="37.71008" lon="-122.44894"/>
    <point lat="37.71022" lon="-122.44845"/>
    <point lat="37.71147" lon="-122.44629"/>
    </path>
    <path>
    <point lat="37.71646" lon="-122.44115"/>
    <point lat="37.71467" lon="-122.44258"/>
    <point lat="37.7147" lon="-122.44265"/>
    <point lat="37.71285" lon="-122.44462"/>
    <point lat="37.7118899" lon="-122.44554"/>
    <point lat="37.71143" lon="-122.44649"/>
    </path>
    <path>
    <point lat="37.78273" lon="-122.40664"/>
    <point lat="37.78075" lon="-122.4091"/>
    <point lat="37.77897" lon="-122.41135"/>
    <point lat="37.77723" lon="-122.41355"/>
    <point lat="37.77594" lon="-122.41518"/>
    <point lat="37.77433" lon="-122.41712"/>
    <point lat="37.77427" lon="-122.41725"/>
    <point lat="37.77431" lon="-122.41729"/>
    </path>
    <path>
    <point lat="37.71143" lon="-122.44649"/>
    <point lat="37.7104799" lon="-122.44834"/>
    <point lat="37.71008" lon="-122.44894"/>
    <point lat="37.7095" lon="-122.45087"/>
    <point lat="37.70866" lon="-122.45332"/>
    <point lat="37.70736" lon="-122.45708"/>
    <point lat="37.70674" lon="-122.45907"/>
    <point lat="37.70682" lon="-122.45906"/>
    <point lat="37.70737" lon="-122.46001"/>
    <point lat="37.70599" lon="-122.46147"/>
    <point lat="37.706" lon="-122.46137"/>
    </path>
    <path>
    <point lat="37.74242" lon="-122.42199"/>
    <point lat="37.7410799" lon="-122.42287"/>
    <point lat="37.73956" lon="-122.4238"/>
    <point lat="37.73924" lon="-122.42394"/>
    <point lat="37.73899" lon="-122.42404"/>
    <point lat="37.73724" lon="-122.42408"/>
    <point lat="37.73706" lon="-122.4242"/>
    <point lat="37.73562" lon="-122.4247"/>
    <point lat="37.73537" lon="-122.42471"/>
    <point lat="37.73428" lon="-122.4258"/>
    <point lat="37.73334" lon="-122.42682"/>
    <point lat="37.73217" lon="-122.428"/>
    <point lat="37.73045" lon="-122.42971"/>
    <point lat="37.72872" lon="-122.43135"/>
    </path>
    <path>
    <point lat="37.77431" lon="-122.41729"/>
    <point lat="37.77328" lon="-122.41848"/>
    <point lat="37.77306" lon="-122.41863"/>
    <point lat="37.77299" lon="-122.41883"/>
    <point lat="37.77281" lon="-122.41917"/>
    <point lat="37.77178" lon="-122.42036"/>
    <point lat="37.77168" lon="-122.42032"/>
    <point lat="37.77073" lon="-122.42031"/>
    <point lat="37.77026" lon="-122.42019"/>
    <point lat="37.77012" lon="-122.42002"/>
    <point lat="37.7678" lon="-122.42002"/>
    <point lat="37.76504" lon="-122.41973"/>
    </path>
    <path>
    <point lat="37.71664" lon="-122.44078"/>
    <point lat="37.7186499" lon="-122.43926"/>
    <point lat="37.7214699" lon="-122.43712"/>
    <point lat="37.72338" lon="-122.43568"/>
    <point lat="37.72454" lon="-122.43481"/>
    <point lat="37.72636" lon="-122.43351"/>
    <point lat="37.72732" lon="-122.43282"/>
    <point lat="37.72872" lon="-122.43132"/>
    </path>
    <path>
    <point lat="37.76513" lon="-122.41967"/>
    <point lat="37.76862" lon="-122.41993"/>
    <point lat="37.77012" lon="-122.42002"/>
    <point lat="37.7704" lon="-122.41987"/>
    <point lat="37.77047" lon="-122.41978"/>
    <point lat="37.7727999" lon="-122.41871"/>
    <point lat="37.77306" lon="-122.41863"/>
    <point lat="37.77299" lon="-122.41848"/>
    <point lat="37.77312" lon="-122.41842"/>
    <point lat="37.77423" lon="-122.4172"/>
    <point lat="37.77432" lon="-122.41712"/>
    </path>
    <path>
    <point lat="37.74241" lon="-122.42194"/>
    <point lat="37.74625" lon="-122.4194"/>
    <point lat="37.74817" lon="-122.41823"/>
    <point lat="37.74848" lon="-122.41811"/>
    <point lat="37.74951" lon="-122.4181"/>
    <point lat="37.75236" lon="-122.4184"/>
    </path>
    <path>
    <point lat="37.71147" lon="-122.44629"/>
    <point lat="37.7118899" lon="-122.44554"/>
    <point lat="37.71251" lon="-122.44475"/>
    <point lat="37.71448" lon="-122.44264"/>
    <point lat="37.71543" lon="-122.44181"/>
    <point lat="37.71664" lon="-122.44078"/>
    </path>
  </route>
  <route tag="49" title="49-Van Ness-Mission" color="b07d00" oppositeColor="000000" latMin="37.72286" latMax="37.8076399" lonMin="-122.45267" lonMax="-122.41214">
    <stop tag="7038" title="Powell St &amp; Beach St" lat="37.8076399" lon="-122.41214" stopId="17038"/>
    <stop tag="5466" title="North Point St &amp; Mason St" lat="37.80656" lon="-122.4142399" stopId="15466"/>
    <stop tag="5460" title="North Point St &amp; Jones St" lat="37.80617" lon="-122.4173999" stopId="15460"/>
    <stop tag="5458" title="North Point St &amp; Hyde St" lat="37.8058" lon="-122.4202299" stopId="15458"/>
    <stop tag="5464" title="North Point St &amp; Larkin St" lat="37.8055899" lon="-122.42189" stopId="15464"/>
    <stop tag="6819" title="Van Ness &amp; North Point" lat="37.8050599" lon="-122.42535" stopId="16819"/>
    <stop tag="6801" title="Van Ness Ave &amp; Chestnut St" lat="37.80243" lon="-122.4249" stopId="16801"/>
    <stop tag="6832" title="Van Ness Ave &amp; Union St" lat="37.7985999" lon="-122.42405" stopId="16832"/>
    <stop tag="6834" title="Van Ness Ave &amp; Vallejo St" lat="37.7964099" lon="-122.4236999" stopId="16834"/>
    <stop tag="6814" title="Van Ness Ave &amp; Jackson St" lat="37.7938299" lon="-122.4231299" stopId="16814"/>
    <stop tag="6828" title="Van Ness Ave &amp; Sacramento St" lat="37.79135" lon="-122.42259" stopId="16828"/>
    <stop tag="6830" title="Van Ness Ave &amp; Sutter St" lat="37.7873999" lon="-122.4218399" stopId="16830"/>
    <stop tag="7736" title="Van Ness Ave &amp; O&apos;Farrell St" lat="37.7849099" lon="-122.42133" stopId="17736"/>
    <stop tag="6805" title="Van Ness Ave &amp; Eddy St" lat="37.7825" lon="-122.42089" stopId="16805"/>
    <stop tag="6816" title="Van Ness Ave &amp; McAllister St" lat="37.77969" lon="-122.42032" stopId="16816"/>
    <stop tag="6821" title="Van Ness Ave &amp; Oak St" lat="37.7754799" lon="-122.41941" stopId="16821"/>
    <stop tag="5836" title="Otis St &amp; 12th St" lat="37.7728099" lon="-122.41917" stopId="15836"/>
    <stop tag="5835" title="150 Otis St" lat="37.7707299" lon="-122.4203099" stopId="15835"/>
    <stop tag="5548" title="Mission St &amp; 14th St" lat="37.7678" lon="-122.42002" stopId="15548"/>
    <stop tag="5552" title="Mission St &amp; 16th St" lat="37.7650399" lon="-122.41973" stopId="15552"/>
    <stop tag="5554" title="Mission St &amp; 18th St" lat="37.7617599" lon="-122.4194599" stopId="15554"/>
    <stop tag="5558" title="Mission St &amp; 20th St" lat="37.7581699" lon="-122.4190899" stopId="15558"/>
    <stop tag="5562" title="Mission St &amp; 22nd St" lat="37.75517" lon="-122.4188" stopId="15562"/>
    <stop tag="5566" title="Mission St &amp; 24th St" lat="37.7519599" lon="-122.41853" stopId="15566"/>
    <stop tag="5568" title="Mission St &amp; 26th St" lat="37.7485699" lon="-122.4181799" stopId="15568"/>
    <stop tag="5626" title="Mission St &amp; Valencia St" lat="37.7450799" lon="-122.4203" stopId="15626"/>
    <stop tag="5572" title="Mission St &amp; 30th St" lat="37.7424199" lon="-122.42199" stopId="15572"/>
    <stop tag="5584" title="Mission St &amp; Cortland Ave" lat="37.7410799" lon="-122.42287" stopId="15584"/>
    <stop tag="5578" title="Mission St &amp; Appleton Ave" lat="37.7389899" lon="-122.42404" stopId="15578"/>
    <stop tag="5597" title="Mission St &amp; Highland Ave" lat="37.73706" lon="-122.4241999" stopId="15597"/>
    <stop tag="5614" title="Mission St &amp; Richland Ave" lat="37.73562" lon="-122.4246999" stopId="15614"/>
    <stop tag="5580" title="Mission St &amp; Bosworth St" lat="37.73334" lon="-122.4268199" stopId="15580"/>
    <stop tag="5573" title="4080 Mission St" lat="37.73217" lon="-122.4279999" stopId="15573"/>
    <stop tag="5625" title="Mission St &amp; Trumbull St" lat="37.7304499" lon="-122.42971" stopId="15625"/>
    <stop tag="5621" title="Mission St &amp; Silver Ave" lat="37.7287199" lon="-122.43135" stopId="15621"/>
    <stop tag="5590" title="Mission St &amp; Francis St" lat="37.72635" lon="-122.4336499" stopId="15590"/>
    <stop tag="5607" title="Mission St &amp; Norton St" lat="37.72431" lon="-122.4351899" stopId="15607"/>
    <stop tag="5796" title="Ocean Ave &amp; Mission St" lat="37.7238899" lon="-122.43614" stopId="15796"/>
    <stop tag="5782" title="Ocean Ave &amp; Cayuga Ave" lat="37.7236699" lon="-122.43867" stopId="15782"/>
    <stop tag="7638" title="Ocean Ave &amp; Otsego Ave" lat="37.7234299" lon="-122.44082" stopId="17638"/>
    <stop tag="5804" title="Ocean Ave &amp; San Jose Ave" lat="37.723" lon="-122.44495" stopId="15804"/>
    <stop tag="7804" title="Ocean Ave &amp; I-280 On-Ramp" lat="37.7230299" lon="-122.4469299" stopId="17804"/>
    <stop tag="5790" title="Ocean Ave &amp; Howth St" lat="37.7230199" lon="-122.4497799" stopId="15790"/>
    <stop tag="35926" title="City College Terminal" lat="37.7236299" lon="-122.45267" stopId="135926"/>
    <stop tag="5926" title="City College Terminal" lat="37.7236299" lon="-122.45267" stopId="15926"/>
    <stop tag="5791" title="Ocean Ave &amp; Howth St" lat="37.72286" lon="-122.4492899" stopId="15791"/>
    <stop tag="5781" title="Ocean Ave &amp; Balboa Park BART" lat="37.7229499" lon="-122.44675" stopId="15781"/>
    <stop tag="5805" title="Ocean Ave &amp; San Jose St" lat="37.7229" lon="-122.4444" stopId="15805"/>
    <stop tag="5800" title="Ocean Ave &amp; Otsego Ave" lat="37.72326" lon="-122.4412399" stopId="15800"/>
    <stop tag="5783" title="Ocean Ave &amp; Cayuga Ave" lat="37.72357" lon="-122.4385299" stopId="15783"/>
    <stop tag="5582" title="Mission St &amp; Brazil Ave" lat="37.7245399" lon="-122.43481" stopId="15582"/>
    <stop tag="5586" title="Mission St &amp; Excelsior Ave" lat="37.72636" lon="-122.4335099" stopId="15586"/>
    <stop tag="5620" title="Mission St &amp; Silver Ave" lat="37.7287199" lon="-122.43132" stopId="15620"/>
    <stop tag="5624" title="Mission St &amp; Trumbull St" lat="37.7306599" lon="-122.42927" stopId="15624"/>
    <stop tag="5605" title="Mission St &amp; Murray St" lat="37.73404" lon="-122.4259199" stopId="15605"/>
    <stop tag="5613" title="Mission St &amp; Richland Ave" lat="37.73591" lon="-122.4244199" stopId="15613"/>
    <stop tag="5596" title="Mission St &amp; Highland Ave" lat="37.7374499" lon="-122.42396" stopId="15596"/>
    <stop tag="5577" title="Mission St &amp; Appleton Ave" lat="37.73887" lon="-122.42387" stopId="15577"/>
    <stop tag="5583" title="Mission St &amp; Cortland Ave" lat="37.74105" lon="-122.4227599" stopId="15583"/>
    <stop tag="5571" title="Mission St &amp; 30th St" lat="37.7424099" lon="-122.42194" stopId="15571"/>
    <stop tag="7841" title="Mission St &amp; Power St" lat="37.74625" lon="-122.4193999" stopId="17841"/>
    <stop tag="5567" title="Mission St &amp; 26th St" lat="37.7495099" lon="-122.4181" stopId="15567"/>
    <stop tag="5565" title="Mission St &amp; 24th St" lat="37.7523599" lon="-122.4184" stopId="15565"/>
    <stop tag="5561" title="Mission St &amp; 22nd St" lat="37.75582" lon="-122.41871" stopId="15561"/>
    <stop tag="5557" title="Mission St &amp; 20th St" lat="37.75911" lon="-122.41902" stopId="15557"/>
    <stop tag="5553" title="Mission St &amp; 18th St" lat="37.76264" lon="-122.41935" stopId="15553"/>
    <stop tag="5551" title="Mission St &amp; 16th St" lat="37.7651299" lon="-122.41967" stopId="15551"/>
    <stop tag="5547" title="Mission St &amp; 14th St" lat="37.76862" lon="-122.41993" stopId="15547"/>
    <stop tag="5546" title="Mission St &amp; 13th St" lat="37.77047" lon="-122.4197799" stopId="15546"/>
    <stop tag="6473" title="S. Van Ness Ave &amp; Mission St" lat="37.7733199" lon="-122.41862" stopId="16473"/>
    <stop tag="6817" title="Van Ness Ave &amp; Market St" lat="37.7755599" lon="-122.41915" stopId="16817"/>
    <stop tag="6815" title="Van Ness Ave &amp; McAllister St" lat="37.78001" lon="-122.42019" stopId="16815"/>
    <stop tag="6804" title="Van Ness Ave &amp; Eddy St" lat="37.7831999" lon="-122.4207299" stopId="16804"/>
    <stop tag="6823" title="Van Ness Ave &amp; O&apos;Farrell St" lat="37.78482" lon="-122.42113" stopId="16823"/>
    <stop tag="6829" title="Van Ness Ave &amp; Sutter St" lat="37.7878299" lon="-122.4216599" stopId="16829"/>
    <stop tag="6803" title="Van Ness Ave &amp; Clay St" lat="37.7924499" lon="-122.4225999" stopId="16803"/>
    <stop tag="6813" title="Van Ness Ave &amp; Jackson St" lat="37.79418" lon="-122.423" stopId="16813"/>
    <stop tag="6798" title="Van Ness Ave &amp; Broadway" lat="37.79608" lon="-122.42333" stopId="16798"/>
    <stop tag="6833" title="Van Ness Ave &amp; Union St" lat="37.7984899" lon="-122.42393" stopId="16833"/>
    <stop tag="6800" title="Van Ness Ave &amp; Chestnut St" lat="37.80258" lon="-122.42464" stopId="16800"/>
    <stop tag="6806" title="Van Ness Ave &amp; Bay St" lat="37.8042899" lon="-122.4249999" stopId="16806"/>
    <stop tag="5472" title="North Point St &amp; Van Ness Ave" lat="37.80505" lon="-122.4249499" stopId="15472"/>
    <stop tag="5469" title="North Point St &amp; Polk St" lat="37.80524" lon="-122.42349" stopId="15469"/>
    <stop tag="5465" title="North Point St &amp; Larkin St" lat="37.8054099" lon="-122.42211" stopId="15465"/>
    <stop tag="5459" title="North Point St &amp; Hyde St" lat="37.80563" lon="-122.4204699" stopId="15459"/>
    <stop tag="5461" title="North Point St &amp; Jones St" lat="37.8060499" lon="-122.41718" stopId="15461"/>
    <stop tag="5467" title="North Point St &amp; Mason St" lat="37.8065199" lon="-122.41346" stopId="15467"/>
    <stop tag="37038" title="Powell St &amp; Beach St" lat="37.8076399" lon="-122.41214" stopId="137038"/>
    <direction tag="49___O_C01" title="Outbound to City College" name="Outbound" useForUI="true">
      <stop tag="7038" />
      <stop tag="5466" />
      <stop tag="5460" />
      <stop tag="5458" />
      <stop tag="5464" />
      <stop tag="6819" />
      <stop tag="6801" />
      <stop tag="6832" />
      <stop tag="6834" />
      <stop tag="6814" />
      <stop tag="6828" />
      <stop tag="6830" />
      <stop tag="7736" />
      <stop tag="6805" />
      <stop tag="6816" />
      <stop tag="6821" />
      <stop tag="5836" />
      <stop tag="5835" />
      <stop tag="5548" />
      <stop tag="5552" />
      <stop tag="5554" />
      <stop tag="5558" />
      <stop tag="5562" />
      <stop tag="5566" />
      <stop tag="5568" />
      <stop tag="5626" />
      <stop tag="5572" />
      <stop tag="5584" />
      <stop tag="5578" />
      <stop tag="5597" />
      <stop tag="5614" />
      <stop tag="5580" />
      <stop tag="5573" />
      <stop tag="5625" />
      <stop tag="5621" />
      <stop tag="5590" />
      <stop tag="5607" />
      <stop tag="5796" />
      <stop tag="5782" />
      <stop tag="7638" />
      <stop tag="5804" />
      <stop tag="7804" />
      <stop tag="5790" />
      <stop tag="35926" />
    </direction>
    <direction tag="49___I_C01" title="Inbound to Fisherman&apos;s Wharf" name="Inbound" useForUI="true">
      <stop tag="5926" />
      <stop tag="5791" />
      <stop tag="5781" />
      <stop tag="5805" />
      <stop tag="5800" />
      <stop tag="5783" />
      <stop tag="5582" />
      <stop tag="5586" />
      <stop tag="5620" />
      <stop tag="5624" />
      <stop tag="5605" />
      <stop tag="5613" />
      <stop tag="5596" />
      <stop tag="5577" />
      <stop tag="5583" />
      <stop tag="5571" />
      <stop tag="7841" />
      <stop tag="5567" />
      <stop tag="5565" />
      <stop tag="5561" />
      <stop tag="5557" />
      <stop tag="5553" />
      <stop tag="5551" />
      <stop tag="5547" />
      <stop tag="5546" />
      <stop tag="6473" />
      <stop tag="6817" />
      <stop tag="6815" />
      <stop tag="6804" />
      <stop tag="6823" />
      <stop tag="6829" />
      <stop tag="6803" />
      <stop tag="6813" />
      <stop tag="6798" />
      <stop tag="6833" />
      <stop tag="6800" />
      <stop tag="6806" />
      <stop tag="5472" />
      <stop tag="5469" />
      <stop tag="5465" />
      <stop tag="5459" />
      <stop tag="5461" />
      <stop tag="5467" />
      <stop tag="37038" />
    </direction>
    <path>
    <point lat="37.74242" lon="-122.42199"/>
    <point lat="37.7410799" lon="-122.42287"/>
    <point lat="37.73956" lon="-122.4238"/>
    <point lat="37.73924" lon="-122.42394"/>
    <point lat="37.73899" lon="-122.42404"/>
    <point lat="37.73724" lon="-122.42408"/>
    <point lat="37.73706" lon="-122.4242"/>
    <point lat="37.73562" lon="-122.4247"/>
    <point lat="37.73537" lon="-122.42471"/>
    <point lat="37.73428" lon="-122.4258"/>
    <point lat="37.73334" lon="-122.42682"/>
    <point lat="37.73217" lon="-122.428"/>
    <point lat="37.73045" lon="-122.42971"/>
    <point lat="37.72872" lon="-122.43135"/>
    </path>
    <path>
    <point lat="37.7519599" lon="-122.41853"/>
    <point lat="37.74857" lon="-122.41818"/>
    <point lat="37.74848" lon="-122.41811"/>
    <point lat="37.74817" lon="-122.41823"/>
    <point lat="37.74678" lon="-122.41913"/>
    <point lat="37.74508" lon="-122.4203"/>
    <point lat="37.74242" lon="-122.42199"/>
    </path>
    <path>
    <point lat="37.72363" lon="-122.45267"/>
    <point lat="37.72363" lon="-122.45234"/>
    <point lat="37.72309" lon="-122.45234"/>
    <point lat="37.72301" lon="-122.45204"/>
    <point lat="37.72286" lon="-122.44929"/>
    <point lat="37.72295" lon="-122.44675"/>
    <point lat="37.7229" lon="-122.4444"/>
    <point lat="37.72309" lon="-122.44329"/>
    <point lat="37.72326" lon="-122.44124"/>
    <point lat="37.72357" lon="-122.43853"/>
    <point lat="37.72373" lon="-122.43703"/>
    <point lat="37.7239099" lon="-122.4354"/>
    <point lat="37.72454" lon="-122.43481"/>
    <point lat="37.72636" lon="-122.43351"/>
    <point lat="37.72732" lon="-122.43282"/>
    <point lat="37.72872" lon="-122.43132"/>
    </path>
    <path>
    <point lat="37.77548" lon="-122.41941"/>
    <point lat="37.77306" lon="-122.41863"/>
    <point lat="37.77299" lon="-122.41883"/>
    <point lat="37.77281" lon="-122.41917"/>
    <point lat="37.77231" lon="-122.41968"/>
    <point lat="37.77178" lon="-122.42036"/>
    <point lat="37.77168" lon="-122.42032"/>
    <point lat="37.77073" lon="-122.42031"/>
    <point lat="37.77026" lon="-122.42019"/>
    <point lat="37.77012" lon="-122.42002"/>
    <point lat="37.7678" lon="-122.42002"/>
    <point lat="37.76504" lon="-122.41973"/>
    </path>
    <path>
    <point lat="37.79849" lon="-122.42393"/>
    <point lat="37.80258" lon="-122.42464"/>
    <point lat="37.80429" lon="-122.425"/>
    <point lat="37.8050799" lon="-122.42531"/>
    <point lat="37.80505" lon="-122.42495"/>
    <point lat="37.80529" lon="-122.42367"/>
    <point lat="37.80524" lon="-122.42349"/>
    <point lat="37.80541" lon="-122.42211"/>
    <point lat="37.80563" lon="-122.42047"/>
    <point lat="37.80605" lon="-122.41718"/>
    <point lat="37.80652" lon="-122.41346"/>
    <point lat="37.80676" lon="-122.41215"/>
    <point lat="37.80764" lon="-122.41214"/>
    </path>
    <path>
    <point lat="37.72389" lon="-122.43614"/>
    <point lat="37.72367" lon="-122.43867"/>
    <point lat="37.72343" lon="-122.44082"/>
    <point lat="37.723" lon="-122.44495"/>
    <point lat="37.72303" lon="-122.44693"/>
    <point lat="37.72296" lon="-122.44728"/>
    <point lat="37.72296" lon="-122.44917"/>
    <point lat="37.72302" lon="-122.44978"/>
    <point lat="37.72301" lon="-122.45204"/>
    <point lat="37.72325" lon="-122.45312"/>
    <point lat="37.72334" lon="-122.45321"/>
    <point lat="37.7234399" lon="-122.45324"/>
    <point lat="37.72355" lon="-122.45324"/>
    <point lat="37.72364" lon="-122.45321"/>
    <point lat="37.72372" lon="-122.45304"/>
    <point lat="37.72363" lon="-122.45267"/>
    </path>
    <path>
    <point lat="37.76513" lon="-122.41967"/>
    <point lat="37.76862" lon="-122.41993"/>
    <point lat="37.77012" lon="-122.42002"/>
    <point lat="37.7704" lon="-122.41987"/>
    <point lat="37.77047" lon="-122.41978"/>
    <point lat="37.7727999" lon="-122.41871"/>
    <point lat="37.77306" lon="-122.41863"/>
    <point lat="37.77332" lon="-122.41862"/>
    <point lat="37.77556" lon="-122.41915"/>
    </path>
    <path>
    <point lat="37.78491" lon="-122.42133"/>
    <point lat="37.7825" lon="-122.42089"/>
    <point lat="37.77969" lon="-122.42032"/>
    <point lat="37.77548" lon="-122.41941"/>
    </path>
    <path>
    <point lat="37.80506" lon="-122.42535"/>
    <point lat="37.80243" lon="-122.4249"/>
    <point lat="37.7986" lon="-122.42405"/>
    </path>
    <path>
    <point lat="37.72872" lon="-122.43132"/>
    <point lat="37.73066" lon="-122.42927"/>
    <point lat="37.73404" lon="-122.42592"/>
    <point lat="37.73537" lon="-122.42471"/>
    <point lat="37.7359099" lon="-122.42442"/>
    <point lat="37.73724" lon="-122.42408"/>
    <point lat="37.73745" lon="-122.42396"/>
    <point lat="37.73887" lon="-122.42387"/>
    <point lat="37.73924" lon="-122.42394"/>
    <point lat="37.73956" lon="-122.4238"/>
    <point lat="37.74105" lon="-122.42276"/>
    <point lat="37.74241" lon="-122.42194"/>
    </path>
    <path>
    <point lat="37.74241" lon="-122.42194"/>
    <point lat="37.74625" lon="-122.4194"/>
    <point lat="37.74817" lon="-122.41823"/>
    <point lat="37.74848" lon="-122.41811"/>
    <point lat="37.74951" lon="-122.4181"/>
    <point lat="37.75236" lon="-122.4184"/>
    </path>
    <path>
    <point lat="37.77556" lon="-122.41915"/>
    <point lat="37.78001" lon="-122.42019"/>
    <point lat="37.7832" lon="-122.42073"/>
    <point lat="37.78482" lon="-122.42113"/>
    <point lat="37.78783" lon="-122.42166"/>
    <point lat="37.79245" lon="-122.4226"/>
    <point lat="37.79418" lon="-122.423"/>
    <point lat="37.79608" lon="-122.42333"/>
    <point lat="37.79849" lon="-122.42393"/>
    </path>
    <path>
    <point lat="37.72872" lon="-122.43135"/>
    <point lat="37.72732" lon="-122.43282"/>
    <point lat="37.7263499" lon="-122.43365"/>
    <point lat="37.72431" lon="-122.43519"/>
    <point lat="37.7239099" lon="-122.4354"/>
    <point lat="37.72389" lon="-122.43614"/>
    </path>
    <path>
    <point lat="37.76504" lon="-122.41973"/>
    <point lat="37.76176" lon="-122.41946"/>
    <point lat="37.75817" lon="-122.41909"/>
    <point lat="37.75517" lon="-122.4188"/>
    <point lat="37.7519599" lon="-122.41853"/>
    </path>
    <path>
    <point lat="37.7986" lon="-122.42405"/>
    <point lat="37.79641" lon="-122.4237"/>
    <point lat="37.79383" lon="-122.42313"/>
    <point lat="37.79135" lon="-122.42259"/>
    <point lat="37.7874" lon="-122.42184"/>
    <point lat="37.78491" lon="-122.42133"/>
    </path>
    <path>
    <point lat="37.75236" lon="-122.4184"/>
    <point lat="37.75582" lon="-122.41871"/>
    <point lat="37.75911" lon="-122.41902"/>
    <point lat="37.76264" lon="-122.41935"/>
    <point lat="37.76513" lon="-122.41967"/>
    </path>
    <path>
    <point lat="37.80764" lon="-122.41214"/>
    <point lat="37.8078999" lon="-122.4107"/>
    <point lat="37.80697" lon="-122.41051"/>
    <point lat="37.80656" lon="-122.41424"/>
    <point lat="37.80617" lon="-122.4174"/>
    <point lat="37.8058" lon="-122.42023"/>
    <point lat="37.80559" lon="-122.42189"/>
    <point lat="37.8050799" lon="-122.42531"/>
    <point lat="37.80506" lon="-122.42535"/>
    </path>
  </route>
</body>
`;
