export default function getHPstatus(player) {
  let statusHP = '';
  if (player.health >= 50) statusHP = 'healthy';
  else if (player.health >= 15) statusHP = 'wounded';
  else statusHP = 'critical';
  return statusHP;
}